import { IRace } from "./race";

export interface IRaces {
    MRData: {
        RaceTable: {
            Races: Array<IRace>    
            round: string
            season: string
        }
    }
}