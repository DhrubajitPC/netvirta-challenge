import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import { USERS } from '../mock-users';
import { User } from '../user';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'img', 'first_name', 'last_name', 'birth_date', 'country', 'status'];  
  users = new MatTableDataSource(USERS);

  @ViewChild(MatSort) sort: MatSort;

  constructor() {}
  
  ngOnInit() {
    console.log(this.users);
  }

  ngAfterViewInit() {
    this.users.sort = this.sort;
  }
  
}
