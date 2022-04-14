const express = require("express");
const { default: mongoose } = require("mongoose");
const { PORT } = require("./config/index.js");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const axios = require("axios").default;
const jwtSecret = "Super_Secret_Key";

const expressConfig = require("./config/express.js");
const databaseConfig = require("./config/database.js");
const {
  createUser,
  getUserByEmail,
  getAllUsers,
  getUserById,
  editUser,
} = require("./services/userService.js");
const auth = require("./services/testAuth.js");
const TOKEN_SECRET = require("./config/index.js");
const COOKIE_NAME = require("./config/index.js");
const USER_DATA = require("./services/testAuth.js");

const {
  createPost,
  getUserPosts,
  getAllPosts,
  getPostById,
  editPost,
  deletePost,
} = require("./services/postService.js");

const {
  getAllRaces,
  isRaceExisting,
  getRacesByRound,
  getAllDriversInfo,
  getAllConstructors,
  createRace,
  createAllConstructorsInfo,
  createRacesByRound,
  createAllDriversInfo,
} = require("./services/calendarService.js");

const {
  createComment,
  getAllComments,
  deleteComment,
  editComment,
  likeComment,
  dislikeComment,
  getCommentLikes,
} = require("./services/commentService.js");

setInterval(() => {
  function fetchRacesFromAPI() {
    mongoose.connection.dropCollection("calendars");

    axios.get("http://ergast.com/api/f1/2022.json").then((data) => {
      let dataArr = Object.values(data.data);
      dataArr.forEach((d) =>
        d.RaceTable.Races.forEach((item) => createRace(item))
      );
    });
  }
  fetchRacesFromAPI();
}, 86400000);

setInterval(() => {
  async function fetchDriverStandingsFromAPI() {
    mongoose.connection.dropCollection("racedetails");
    const rounds = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22,
    ];
    rounds.forEach((round) => {
      axios
        .get(`https://ergast.com/api/f1/2022/${round}/results.json`)
        .then((data) => {
          createRacesByRound(data.data.MRData);
        });
    });
  }
  fetchDriverStandingsFromAPI();
}, 86400000);

setInterval(() => {
  async function fetchAllDriversInformationStandingsFromAPI() {
    mongoose.connection.dropCollection("drivers");
    axios
      .get("https://ergast.com/api/f1/2022/driverStandings.json")
      .then((data) => createAllDriversInfo(data.data.MRData.StandingsTable));
  }
  fetchAllDriversInformationStandingsFromAPI();
}, 86400000);

setInterval(() => {
  async function fetchAllConstructorsInfoFromAPI() {
    mongoose.connection.dropCollection("constructors");

    axios
      .get("https://ergast.com/api/f1/2022/constructorStandings.json")
      .then(async (data) => {
        await createAllConstructorsInfo(data.data.MRData.StandingsTable);
      });
  }
  fetchAllConstructorsInfoFromAPI();
}, 86400000);

start();

async function start() {
  const app = express();
  app.use(cors());
  app.use(auth());

  expressConfig(app);
  await databaseConfig(app);

  app.get("/", (req, res) => {
    res.json({ message: "Rest service operation" });
  });

  app.post("/register", async (req, res) => {
    let password = req.body.password;
    let hashedPassword = await bcrypt.hash(password, 10);
    let userData = {
      email: req.body.email.toLowerCase(),
      fullName: req.body.fullname,
      birthday: req.body.birthday,
      country: req.body.country,
      team: req.body.team,
      password: hashedPassword,
    };
    try {
      if (req.body.password !== req.body.rePass) {
        throw new Error("Passwords don't match");
      }
      let user = await createUser(userData);
      let token = jwt.sign(
        {
          _id: user._id,
          email: user.email,
        },
        jwtSecret
      );

      res.status(200).send({ token, userId: user._id });
    } catch (error) {
      res.status(401).send(`${error.message}`);
    }
  });

  app.post("/login", async (req, res) => {
    password = req.body.password;
    let userData = req.body;
    try {
      const user = await getUserByEmail(userData.email.toLowerCase());
      const isMatch = await bcrypt.compare(password, user.password);
      if (!user) {
        res.status(401).send("Invalid email or password");
        return;
      }

      if (!isMatch) {
        res.status(401).send("Invalid email or password");
        return;
      }

      let payload = {
        _id: user._id,
        email: user.email,
      };
      let token = jwt.sign(payload, jwtSecret);
      res.status(200).json({ token, userId: user._id });
    } catch (error) {
      res.status(401).send("Invalid email or password");
    }
  });

  app.put("/user/:userId/edit", async (req, res) => {
    const userData = {
      fullName: req.body.fullname,
      birthday: req.body.birthday,
      country: req.body.country,
      team: req.body.team,
    };
    const editedUser = await editUser(userData, req.user._id);
    res.json(editedUser);
  });

  app.post("/create", async (req, res) => {
    let post = {
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      author: req.user._id,
    };
    try {
      await createPost(post);
    } catch (error) {
      console.log(error);
    }
  });

  app.post("/create-comment", async (req, res) => {
    const postId = req.query.postId;
    let data = {
      comment: req.body.comment,
      author: req.user._id,
      post: postId,
    };
    try {
      await createComment(data, postId);
    } catch (error) {
      console.log(error);
    }
  });

  app.get("/posts", async (req, res) => {
    const posts = await getAllPosts();
    res.json(posts);
  });

  app.get("/posts/:postId", async (req, res) => {
    const postId = req.query.postId;

    const post = await getPostById(postId);
    res.json(post);
  });

  app.put("/posts/:postId/edit", async (req, res) => {
    const postId = req.query.postId;
    const data = {
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
    };
    const editedPost = await editPost(data, postId);
    res.json(editedPost);
  });

  app.delete("/posts/:postId/delete", async (req, res) => {
    const postId = req.query.postId;

    await deletePost(postId);

    res.json();
  });

  app.get("/comments", async (req, res) => {
    const comments = await getAllComments();
    res.json(comments);
  });

  app.get("/races", async (req, res) => {
    const races = await getAllRaces();
    const allRaces = races.sort((a, b) => a.date.localeCompare(b.date));
    res.json(allRaces);
  });

  app.get("/races/by-round", async (req, res) => {
    const races = await getRacesByRound();
    res.json(races);
  });

  app.get("/drivers", async (req, res) => {
    const drivers = await getAllDriversInfo();
    res.json(drivers);
  });

  app.get("/constructors", async (req, res) => {
    const constructors = await getAllConstructors();
    res.json(constructors);
  });

  app.get("/users", async (req, res) => {
    const users = await getAllUsers();
    res.json(users);
  });

  app.get("/user/:userId", async (req, res) => {
    const user = await getUserById(req.user._id);

    return res.json(user);
  });

  app.delete("/delete/:commentId", async (req, res) => {
    const commentId = req.query.commentId;
    const postId = req.query.postId;
    await deleteComment(commentId, postId);
    res.json();
  });

  app.post("/comments/:commentId/like", async (req, res) => {
    const commentId = req.query.commentId;
    const userId = req.user._id;

    const like = await likeComment(commentId, userId);
    res.json(like);
  });

  app.post("/comments/:commentId/dislike", async (req, res) => {
    const commentId = req.query.commentId;
    const userId = req.user._id;

    const dislike = await dislikeComment(commentId, userId);
    res.json(dislike);
  });

  app.listen(PORT, () => {
    console.log(`The server is listening on port: http://localhost:${PORT}`);
  });
}
