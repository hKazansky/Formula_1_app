import { IRace } from "./race";

export interface ICalendar {
    MRData: {
        RaceTable: {
            Races: Array<IRace>
        }
    }
}