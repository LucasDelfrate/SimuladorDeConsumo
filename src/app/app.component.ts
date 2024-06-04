import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { SelectRoomsComponent } from './src/components/select-rooms/select-rooms.component';
import { Room } from './interfaces/room.interface';
import { CommonModule, NgForOf } from '@angular/common';
import { Device } from './interfaces/device.interface';
import { FormGroup, FormBuilder, FormsModule } from '@angular/forms';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, NgForOf, CommonModule, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'projeto-simulador-consumo';
  roomTittle: string = ''
  roomsSelected: Room[] = [];
  roomLength: number = 0;
  configRoom: boolean = false;
  currentRoom!: Room;
  grafico!: boolean;
  public chart: any;
  public chart2: any;
  
  constructor(public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
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
  abrirGrafico(){
    this.grafico = true;
    this.createChart();
    this.createChart2();
  }
  createChart(){
    let nomes: string [] = [];
    let level2: string[] = [];
    let level5: string[] = [];
    let interferencia: string[] = [];
    this.roomsSelected.forEach((room) => {
      nomes.push(room.nome);
      level2.push(room.level2.toString());
      interferencia.push(room.interferencia.toString())
      level5.push(room.level5.toString())
    })
    this.chart = new Chart("MyChart", {
      type: 'bar',
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Resultado do nível de sinal(dbm)'
          }
        }
      },
      data: {
        labels: nomes, 
	       datasets: [
          {
            label: "Nivel de sinal 2.4ghz",
            data: level2,
            backgroundColor: '#4bc0c0'
          },
          {
            label: "Nivel de sinal 5ghz",
            data: level5,
            backgroundColor: '#059bff'
          },
          {
            label: "Interferência",
            data: interferencia,
            backgroundColor: '#ff4069'
          },
        ]
      },
      
    });
  }

  createChart2(){
    let delayed: any;
    let nomes: string [] = [];
    let speed2: string[] = [];
    let speed5: string[] = [];
    this.roomsSelected.forEach((room) => {
      nomes.push(room.nome);
      speed2.push(room.speed2.toString());
      speed5.push(room.speed5.toString())
    })
    this.chart2 = new Chart("MyChart2", {
      type: 'bar',
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Velocidade da rede WIFI(mbps)'
          }
        },
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
      },
      data: {
        labels: nomes, 
	       datasets: [
          {
            label: "Velocidade 2.4ghz",
            data: speed2,
            backgroundColor: '#059bff',
          },
          {
            label: "Velocidade 5ghz",
            data: speed5,
            backgroundColor: '#ff4069'
          },
        ]
      },
      
    });
  }
  sairDoGrafico(){
    this.grafico = false;
    if(this.chart) this.chart.destroy();
    if(this.chart2) this.chart2.destroy();
  }
}
