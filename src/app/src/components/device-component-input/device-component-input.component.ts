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

  device!: Device;
  speed2: string = '';
  speed5: string = '';
  level2: string = '';
  level5: string = '';
  

  ngOnInit(): void {
    this.device = this.data.device;
  }

  onClose(){
    this.device.speed2 = this.speed2;
    this.device.speed5 = this.speed5;
    this.device.level2 = this.level2;
    this.device.level5 = this.level5;

    this.dialogRef.close({ 
      device: this.device
   });
  }

}
