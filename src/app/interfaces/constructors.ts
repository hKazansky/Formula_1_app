import { IConstructor } from "./constructor";

export interface IConstructors {
    "_id": string,
    "season": string,
    "StandingsLists": Array<IConstructorAddInfo>
}


export interface IConstructorAddInfo {
    "season": string,
    "round": string,
    "ConstructorStandings": Array<IAdditionalInfo>

}

interface IAdditionalInfo {
    "position": string,
    "positionText": string,
    "points": string,
    "wins": string,
    "Constructor": IConstructor
}