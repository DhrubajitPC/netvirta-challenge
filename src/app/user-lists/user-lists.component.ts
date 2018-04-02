import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { USERS } from '../mock-users';
import { User } from '../user';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {
  displayedColumns: string[] = ['select', 'img', 'first_name', 'last_name', 'birth_date', 'country', 'status', 'actions'];  
  users = new MatTableDataSource<User>(USERS);
  selection = new SelectionModel<User>(true, []);
  user: User;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    console.log(this.users);
  }
  
  ngAfterViewInit() {
    this.users.sort = this.sort;
    this.users.paginator = this.paginator;
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

  openDialog(user): void {
    this.user = user;
    let dialogRef = this.dialog.open(EditUserComponent, {
      width: '50%',
      data: Object.assign({}, this.user),
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user = Object.assign(this.user, result);
    });
  }

}
