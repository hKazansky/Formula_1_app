import { Component, OnInit } from '@angular/core';
import { IDriver } from 'src/app/interfaces/driver';
import { DriversService } from 'src/app/services/drivers.service';
import { ActivatedRoute } from '@angular/router'
import { IDrivers, IDriverStanding } from 'src/app/interfaces/drivers';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  driverId: string = '';
  drivers!: IDrivers[];
  driverDetails!: IDriverStanding;
  isLoaded: boolean = false;

  constructor(private service: DriversService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadDriverDetails();
  }

  loadDriverDetails(): void {
    this.driverId = Object.values(this.route.snapshot.params)[0]
    this.service.loadDrivers().subscribe((drivers) => {
      this.drivers = drivers
      this.driverDetails! = this.drivers[0].StandingsLists[0].DriverStandings.filter((d: any) => d.Driver.driverId === this.driverId)[0];
    });
  }
}

