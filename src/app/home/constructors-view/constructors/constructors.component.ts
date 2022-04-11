import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { transitDates } from 'src/app/animations';
import { IConstructorAddInfo } from 'src/app/interfaces/constructors';
import { ConstructorsService } from 'src/app/services/constructors.service';

@Component({
  selector: 'app-constructors',
  templateUrl: './constructors.component.html',
  styleUrls: ['./constructors.component.css'],
  animations: [transitDates]
})
export class ConstructorsComponent implements OnInit {
  getAllConstructors!: Subscription
  constructors!: IConstructorAddInfo

  constructor(private constructorsService: ConstructorsService) { }

  ngOnInit(): void {
    this.loadConstructorsData();
  }

  loadConstructorsData(): void {
    this.getAllConstructors = this.constructorsService.loadConstructors().subscribe(c => {
      this.constructors = c[0].StandingsLists[0]
    })
  }

  ngOnDestroy(): void {
    this.getAllConstructors.unsubscribe();
  }
}
