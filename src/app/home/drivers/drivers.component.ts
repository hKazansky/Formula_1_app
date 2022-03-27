import { Component, OnInit } from '@angular/core';
import { IDriver } from 'src/app/interfaces/driver';
import { DriversService } from 'src/app/services/drivers.service';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  constructor(private driversService: DriversService) { }

  drivers: any

  ngOnInit(): void {
    this.getDrivers();
  }


  getDrivers(): void {

    this.driversService.loadDrivers().subscribe((drivers) => {

      this.drivers = drivers[0].StandingsLists[0].DriverStandings

    });
  }
}
