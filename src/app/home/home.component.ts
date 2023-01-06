import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { Monster } from '../models/monster';
import { DataService } from '../services/data.service';
import { UserDetailService } from '../services/user-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  monstersList: Monster[] = [] as Monster[];
  subscription = new Subscription()
  searchField: string = '';
  searched: string = '';
  searchObserver: BehaviorSubject<string> = new BehaviorSubject('');
  isLoading;
  hasError = false;

  constructor(@Inject(DOCUMENT) document: Document, private dataService: DataService, private userDetailService: UserDetailService, public router: Router) { 
    this.isLoading = this.dataService.isLoading;
  }

  ngOnInit(): void {
    this.setGridDesign()
    this.startListeners()
    this.fetchMonsters()
  }

  filterList() {
    this.searchObserver.next(this.searchField)
  }

  setGridDesign() {
    let grid = document.getElementById(
      'grid'
    )
    grid!!.style.gridTemplateColumns = `repeat(4, 175px)`;
  }

  startListeners() {
    this.subscription.add(this.searchObserver.pipe(
      debounceTime(1000),
      distinctUntilChanged()
    ).subscribe(search => {
      if (this.monstersList.length > 0) {
        this.searched = search
      }
    })
    )
  }

  fetchMonsters() {
    this.subscription.add(this.dataService.getUsers().subscribe({
      next: users => {
      this.userDetailService.addItemsToList(users);
      for (let user of users) {
        this.monstersList.push(user)
      }
    },
      error: () => {
        this.hasError = true;
      }
  })
    )
  }

  onFloatClick() {
    console.log(this.router.navigateByUrl('add'));
    
    this.router.navigateByUrl('add')
  
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}



