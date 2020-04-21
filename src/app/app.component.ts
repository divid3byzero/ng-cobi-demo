import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public currentSpeed: number;

  ngOnInit(): void {
    COBI.init('token');
    setTimeout(() => {
      COBI.rideService.speed.subscribe(speed => this.currentSpeed = speed);
    }, 2000)

  }
}
