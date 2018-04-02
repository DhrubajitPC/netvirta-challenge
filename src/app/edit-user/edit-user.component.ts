import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  date;
  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(){
    this.date = new FormControl(new Date(this.data.birth_date));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateDate(event: MatDatepickerInputEvent<Date>){
    this.data.birth_date = event.value;
  }
}
