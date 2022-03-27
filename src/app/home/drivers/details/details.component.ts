import { Component, OnInit } from '@angular/core';
import { IDriver } from 'src/app/interfaces/driver';
import { DriversService } from 'src/app/services/drivers.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  // driverDetails: IDriver[] | undefined
  driverId: string = '';
  drivers: any;
  driverDetails: any;
  isLoaded: boolean = false;

  constructor(private service: DriversService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadDriverDetails();
  }

  loadDriverDetails(): void {
    this.driverId = Object.values(this.route.snapshot.params)[0]
    this.service.loadDrivers().subscribe((driver) => {
      this.drivers = driver[0].StandingsLists[0].DriverStandings
      this.driverDetails = this.drivers.filter((d: any) => d.Driver.driverId === this.driverId);
    });
  }
}

