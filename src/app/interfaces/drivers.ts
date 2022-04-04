import { IConstructor } from "./constructor";
import { IDriver } from "./driver";

export interface IDrivers {

    "_id": string,
    "season": string,
    "StandingsLists": IDriversStandings[]
}


interface IDriversStandings {
    "season": string,
    "round": string,
    "DriverStandings": IDriverStanding[]

}

export interface IDriverStanding {
    "position": string,
    "positionText": string,
    "points": string,
    "wins": string,
    "Driver": IDriver,
    "Constructors": IConstructor[];
}