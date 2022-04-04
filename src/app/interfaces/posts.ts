import { IAuthor } from "./author";

export interface IPosts {

    "_id": string,
    "title": string,
    "description": string,
    "comments": string[],
    "imageUrl": string,
    "author": IAuthor,
    "__v": number

}


