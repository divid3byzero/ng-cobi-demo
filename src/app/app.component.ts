import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public calories: number;

  ngOnInit(): void {
  }

  public displayCalories(): void {
    COBI.tourService.calories.subscribe(calories => {
      console.warn('Calories: ' + calories);
      this.calories = calories;
    });
  }
}
