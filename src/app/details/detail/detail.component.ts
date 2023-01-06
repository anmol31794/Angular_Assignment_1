import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Monster } from 'src/app/models/monster';
import { UserDetailService } from 'src/app/services/user-detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  monsterDetail : Monster | null = null

  constructor(private route: ActivatedRoute, private userDetailService : UserDetailService) {}

  ngOnInit() {
    console.log('ng onit detail');
    
    this.route.params.subscribe(params => {
      console.log('The id of this route is: ', params['id']);
      this.monsterDetail = this.userDetailService.getDetailById(params['id']);
    });
  }

}
