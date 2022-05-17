import { Component, OnInit } from '@angular/core';
import { Sujet } from 'src/app/model/sujet';
import { SujetService } from 'src/app/services/sujet.service';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css']
})
export class SujetComponent implements OnInit {
sujets : Sujet[] = [
];
  constructor(private sujetService : SujetService) { }

  ngOnInit(): void {
    this.initSujet();
  }
  initSujet(){
    this.sujetService.findAll().subscribe((data) => {
      this.sujets = data;
      console.log(this.sujets);
      console.log(this.sujets[0].message.length);
      
    })
  }
}
