import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/servcices/swapi.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {
  planets:any;
  iconname = 'planet';
  constructor(private swapiService:SwapiService) { }

  ngOnInit() {
    this.planets = this.swapiService.getSwapi('planets')
    // this.swapiService.getSwapi('planets').subscribe(data => {
    //   this.planets = data;
    //   console.log(data);
    // })
  }

}
