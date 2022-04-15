import { Component, OnInit } from "@angular/core";
import { fade } from "src/app/animations";
import { IDrivers } from "src/app/interfaces/drivers";
import { DriversService } from "../services/drivers.service";



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

  getDrivers(): void {

    this.driversService.loadDrivers().subscribe((drivers) => {
      this.drivers = drivers;
    });
  }
}
