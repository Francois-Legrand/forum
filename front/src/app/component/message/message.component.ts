import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'src/app/model/message';

import { Sujet } from 'src/app/model/sujet';
import { SujetService } from 'src/app/services/sujet.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
sujetId !: string;
message !: Message;
sujet !: Sujet;
count !: number;
  constructor(private sujetService : SujetService, private route: ActivatedRoute) { 
    this.sujetId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    
    this.findSujet();
  }
  findSujet(){
    
    this.sujetService.findById(this.sujetId).subscribe(data => {
      this.sujet = data;
    })
  }

}
