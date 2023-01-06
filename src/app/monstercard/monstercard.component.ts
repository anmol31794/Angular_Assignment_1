import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Monster } from '../models/monster';

@Component({
  selector: 'app-monstercard',
  templateUrl: './monstercard.component.html',
  styleUrls: ['./monstercard.component.css']
})
export class MonstercardComponent implements OnInit {

  @Input('monsterDetail') monsterDetail : Monster = {} as Monster

  constructor(public router: Router) {}

  ngOnInit(): void {
    
  }

  onCardClick() {
    console.log(this.monsterDetail, 'monsterDetail');
    this.router.navigateByUrl('details/' + this.monsterDetail.id)
  }

}
