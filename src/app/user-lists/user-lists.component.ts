import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { USERS } from '../mock-users';
import { User } from '../user';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'img', 'first_name', 'last_name', 'birth_date', 'country', 'status', 'actions'];  
  users = new MatTableDataSource<User>(USERS);
  selection = new SelectionModel<User>(true, []);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}
  
  ngOnInit() {
    console.log(this.users);
  }
  
  ngAfterViewInit() {
    this.users.sort = this.sort;
    this.users.paginator = this.paginator;
    this.users.paginator._intl.previousPageLabel = 'Previous';
    this.users.paginator._intl.nextPageLabel = 'Next';
  }
  
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.users.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.users.data.forEach(row => this.selection.select(row));
  }

  edit(user): void {
    console.log(user);
  }
}
