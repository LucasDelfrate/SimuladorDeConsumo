import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { SelectRoomsComponent } from './src/components/select-rooms/select-rooms.component';
import { Room } from './interfaces/room.interface';
import { CommonModule, NgForOf } from '@angular/common';
import { Device } from './interfaces/device.interface';
import { FormGroup, FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, NgForOf, CommonModule, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-simulador-consumo';
  roomTittle: string = ''
  roomsSelected: Room[] = [];
  roomLength: number = 0;
  configRoom: boolean = false;
  currentRoom!: Room;
  
  constructor(public dialog: MatDialog,
  ) { 

  }
  openSelectedRooms(): void{
    const dialogRef = this.dialog.open(SelectRoomsComponent, {
      width: '50%',
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
    this.configRoom = true;
    this.currentRoom = item;
    
  }
  removeRoom(item: Room){
    this.roomsSelected = this.roomsSelected.filter(val => item.id != val.id);
    this.roomsSelected.forEach((room, index) => {
      room.id = index + 1;
    });
  }
  saveConfig(){
    this.configRoom = false;
    this.roomsSelected.forEach((room)=>{
      if(room.id == this.currentRoom.id){
        room.temConfig = true;
      }
    })
  }
  voltar(){
    this.configRoom = false;
  }
  limparConfig(room: Room){
    room.temConfig = false;
    room.level2 = 0;
    room.level5 = 0;
    room.speed2 = 0;
    room.speed5 = 0;
    room.interferencia = 0;
  }
}
