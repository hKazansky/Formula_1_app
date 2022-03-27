import { IConstructor } from "./constructor";
import { IDriver } from "./driver";

export interface IStanding {
    number: {
        Constructors: Array<IConstructor>
        Driver: Array<IDriver>
    }
    points: string;
    position: string;
    positionText: string;
    wins: string;
}