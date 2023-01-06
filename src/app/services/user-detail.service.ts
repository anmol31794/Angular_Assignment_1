import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Monster } from '../models/monster';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  private usersList : Monster[] = [];

  constructor() { }

  getAllUserList() : Monster[] {
    return this.usersList;
  }

  addItemsToList(monsters : Monster[]) {
    this.usersList = [];
    for (let monster of monsters){
      this.usersList.push(monster)
    }
  }

  getDetailById(id : string) : Monster | null {
    for (let monster of this.usersList){
      if (id === monster.id.toString()) {
        return monster;
      }
    }
    return null;
  }
}
