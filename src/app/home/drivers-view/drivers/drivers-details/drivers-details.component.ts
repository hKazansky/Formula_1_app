import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDrivers, IDriverStanding } from 'src/app/interfaces/drivers';
import { DriversService } from '../../services/drivers.service';

@Component({
  selector: 'app-drivers-details',
  templateUrl: './drivers-details.component.html',
  styleUrls: ['./drivers-details.component.css']
})
export class DriversDetailsComponent implements OnInit {

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
    this.driverId = Object.values(this.route.snapshot.params)[0];
    
    this.service.loadDrivers().subscribe((drivers) => {
      this.drivers = drivers
      this.driverDetails = this.drivers[0].StandingsLists[0].DriverStandings.filter((d: any) => d.Driver.driverId === this.driverId)[0];
    });
  }
}
