import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/servcices/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description-planets',
  templateUrl: './description-planets.page.html',
  styleUrls: ['./description-planets.page.scss'],
})
export class DescriptionPlanetsPage implements OnInit {
  planets:any;
  constructor(
    private swapiService:SwapiService,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      this.planets = this.swapiService.getSwapi('planets/' + id).subscribe(data=> {
        this.planets = data;
        console.log(data);
      });
    });
  }



}
