import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { of } from "rxjs";
import { DriversService } from "../services/drivers.service";

@Injectable()
export class RouteResolver implements Resolve<any> {
    constructor(private driversService: DriversService) {
        // Declare an API data service
    }

    resolve() {
        console.log('Route resolve')
        return this.driversService.loadDrivers();

    }
}

