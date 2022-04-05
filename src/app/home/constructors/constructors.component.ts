import { Component, OnInit } from '@angular/core';
import { fade, transitDates } from 'src/app/animations';
import { IConstructor } from 'src/app/interfaces/constructor';
import { ConstructorsService } from 'src/app/services/constructors.service';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.css'],
  animations: [transitDates, fade]
})
export class ConstructorsComponent implements OnInit {
  constructors: any

  constructor(private constructorsService: ConstructorsService) { }

  ngOnInit(): void {
    this.loadConstructorsData();
  }

  loadConstructorsData(): void {
    this.constructorsService.loadConstructors().subscribe(c => {
      // this.constructors = c.MRData.StandingsTable.StandingsLists);
      this.constructors = c[0].StandingsLists[0].ConstructorStandings
    }
    )
  }


}
