import { Component, Inject, OnInit } from '@angular/core';
import { Device } from '../../../interfaces/device.interface';
import { SelectRoomsComponent } from '../select-rooms/select-rooms.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-device-component-input',
  standalone: true,
  imports: [MatFormFieldModule],
  templateUrl: './device-component-input.component.html',
  styleUrl: './device-component-input.component.css'
})
export class DeviceComponentInputComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<SelectRoomsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  speed2: string = '';
  speed5: string = '';
  level2: string = '';
  level5: string = '';
  

  ngOnInit(): void {
  }

  onClose(){


    this.dialogRef.close({ 
   });
  }

}
