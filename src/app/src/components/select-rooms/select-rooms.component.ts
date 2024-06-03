import { Component, Inject, OnInit } from '@angular/core';
import { Room } from '../../../interfaces/room.interface';
import { NgForOf } from '@angular/common';
import { Device } from '../../../interfaces/device.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-select-rooms',
  standalone: true,
  imports: [NgForOf, FormsModule, MatIconModule],
  templateUrl: './select-rooms.component.html',
  styleUrl: './select-rooms.component.css'
})
export class SelectRoomsComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<SelectRoomsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  inputText: string = ''
  room: Room[] = [
    {
      id: undefined,
      nome: 'Cozinha',
      imagem: '/assets/imgs/cozinha.jpg',
      isSelected: false,
      speed2: 0,
      interferencia: 0,
      level2: 0,
      level5: 0,
      speed5: 0,
      temConfig: false
    },
    {
      id: undefined,
      nome: 'Quarto',
      imagem: '/assets/imgs/quarto.jpg',
      isSelected: false,
      speed2: 0,
      interferencia: 0,
      level2: 0,
      level5: 0,
      speed5: 0,
      temConfig: false
    },
    {
      id: undefined,
      nome: 'Banheiro',
      imagem: '/assets/imgs/banheiro.jpg',
      isSelected: false,
      speed2: 0,
      interferencia: 0,
      level2: 0,
      level5: 0,
      speed5: 0,
      temConfig: false
    },
    {
      id: undefined,
      nome: 'Sala',
      imagem: '/assets/imgs/sala-de-estar.jpg',
      isSelected: false,
      speed2: 0,
      interferencia: 0,
      level2: 0,
      level5: 0,
      speed5: 0,
      temConfig: false
    },
    {
      id: undefined,
      nome: 'Escritório',
      imagem: '/assets/imgs/escritorio.jpg',
      isSelected: false,
      speed2: 0,
      interferencia: 0,
      level2: 0,
      level5: 0,
      speed5: 0,
      temConfig: false
    },
    { 
      id: undefined,
      nome: 'Lavanderia',
      imagem: '/assets/imgs/lavanderia.jpg',
      isSelected: false,
      speed2: 0,
      interferencia: 0,
      level2: 0,
      level5: 0,
      speed5: 0,
      temConfig: false
    },
    { 
      id: undefined,
      nome: 'Garagem',
      imagem: '/assets/imgs/garagem.jpg',
      isSelected: false,
      speed2: 0,
      interferencia: 0,
      level2: 0,
      level5: 0,
      speed5: 0,
      temConfig: false
    },
    {
      id: undefined,
      nome: 'Genérico',
      imagem: '/assets/imgs/generico.png',
      isSelected: false,
      speed2: 0,
      interferencia: 0,
      level2: 0,
      level5: 0,
      speed5: 0,
      temConfig: false
    }, 
  ]
  roomsSelected: Room[] = []
  roomLength: number = 0;

  ngOnInit(): void {
    this.roomLength = this.data.roomLength;
    this.inputText = this.data.roomTittle;
  }

  onClose() {
    
    this.dialogRef.close({ 
        roomsSelected: this.roomsSelected,
        inputText: this.inputText,
     });
  }

  addRoom(item: Room) {    
    this.roomLength ++;
    item.isSelected = !item.isSelected;
    item.id = this.roomLength;
    this.roomsSelected.push(item);
    this.roomsSelected = this.roomsSelected.filter(item => item.isSelected)
  }
  limpar(){
    this.roomsSelected = this.roomsSelected.filter(item => {
      return item.id && item.id > this.roomLength;
    });
    this.room.forEach(room => {
      room.isSelected = false;
    })
  }
}
