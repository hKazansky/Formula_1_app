export interface IComment {
    "_id": string,
    "comment": string,
    "author": string,
    "post": {
        "_id": string
        "title": string
        "description": string
        "comments": [],
        "imageUrl": string,
        "author": string,
        "__v": number
    },
    "__v": number
}