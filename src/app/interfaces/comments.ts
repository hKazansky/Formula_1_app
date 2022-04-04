import { IAuthor } from "./author";
import { IPosts } from "./posts";

export interface IComments {
    "_id": string,
    "comment": string,
    "author": IAuthor,
    "post": IPosts,
    "likes": string[],
    "dislikes": string[],
    "__v": number,
}
