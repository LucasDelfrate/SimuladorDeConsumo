import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { SelectRoomsComponent } from './src/components/select-rooms/select-rooms.component';
import { Room } from './interfaces/room.interface';
import { NgForOf } from '@angular/common';
import { SelectDevicesComponent } from './src/components/select-devices/select-devices.component';
import { DeviceComponentInputComponent } from './src/components/device-component-input/device-component-input.component';
import { Device } from './interfaces/device.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }
  title = 'projeto-simulador-consumo';
  roomTittle: string = ''
  roomsSelected: Room[] = [];
  roomLength: number = 0;

  openSelectedRooms(): void{
    const dialogRef = this.dialog.open(SelectRoomsComponent, {
      width: '40%',
      height: '65%',
      data: {
        roomTittle: this.roomTittle,
        roomLength: this.roomLength,
      }

    });
    dialogRef.afterClosed().subscribe(result => {
      
      this.roomTittle = result.inputText;
      this.roomsSelected.push(...result.roomsSelected);
      this.roomLength = this.roomsSelected.length;
      
    });
    
  }
  openSelectedDevices(item: Room): void {
    
    const dialogRef = this.dialog.open(SelectDevicesComponent, {
      width: '40%',
      height: '65%',
      data: {
        roomLength: this.roomsSelected.length,
      }
      
    });
    dialogRef.afterClosed().subscribe(result => {
      
          this.roomsSelected.forEach(room => {
            if(room.id == item.id){
              room.devices = room.devices.filter(device => device.nome != '');
              room.devices.push(result.device);
            }
          })
          
    });
  }
  removeRoom(item: Room){
    this.roomsSelected = this.roomsSelected.filter(val => item.id != val.id);
    this.roomsSelected.forEach((room, index) => {
      room.id = index + 1;
    });
  }
  showDevice(item: Device){
    const dialogRef = this.dialog.open(SelectDevicesComponent, {
      width: '40%',
      height: '65%',
      data: {
        device: item,
        isSelected: true,
      }
      
    });
  }
}
