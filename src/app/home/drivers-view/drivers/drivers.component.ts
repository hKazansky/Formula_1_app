import { Component, OnInit } from "@angular/core";
import { fade } from "src/app/animations";
import { IDrivers } from "src/app/interfaces/drivers";
import { DriversService } from "src/app/services/drivers.service";



@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css'],
  animations: [fade]
})
export class DriversComponent implements OnInit {
  constructor(private driversService: DriversService) { }

  drivers!: IDrivers[]

  ngOnInit(): void {
    this.getDrivers();
  }

  //Make an OUTPUT / INPUT to the details component, so i've no need of fetching the drivers one more time

  getDrivers(): void {

    this.driversService.loadDrivers().subscribe((drivers) => {
      this.drivers = drivers;
    });
  }
}
