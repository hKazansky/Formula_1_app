const Constructors = require("../models/Constructors.js");
const RaceDetails = require("../models/RaceDetails.js");
const Calendar = require("./../models/Calendar.js");
const Drivers = require("./../models/Standings.js");

async function createRace(data) {
  const race = await new Calendar(data);
  return race.save();
}

async function createRacesByRound(data) {
  const race = await new RaceDetails(data);

  return race.save();
}

async function getAllRaces() {
  const races = await Calendar.find({}).sort({date: 'asc'});
  return races;
}

async function getRacesByRound() {
  const races = await RaceDetails.find({});

  return races;
}

async function getSingleRaceByRound(round) {
  const race = await RaceDetails.findOne({ round });

  return race;
}

async function createAllDriversInfo(data) {
  const drivers = await new Drivers(data);

  return await drivers.save();
}

async function getAllDriversInfo() {
  const drivers = await Drivers.find({});

  return await drivers;
}

async function createAllConstructorsInfo(data) {
  const constructors = await new Constructors(data);

  return await constructors.save();
}

async function getAllConstructors() {
  const constructors = await Constructors.find({});

  return await constructors;
}

module.exports = {
  createRace,
  getAllRaces,
  getRacesByRound,
  createRacesByRound,
  getSingleRaceByRound,
  createAllDriversInfo,
  getAllDriversInfo,
  createAllConstructorsInfo,
  getAllConstructors,
};
