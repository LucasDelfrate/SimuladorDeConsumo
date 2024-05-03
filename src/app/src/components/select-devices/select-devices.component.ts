import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { Device } from '../../../interfaces/device.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-select-devices',
  standalone: true,
  imports: [NgForOf, FormsModule, MatIconModule, CommonModule ],
  templateUrl: './select-devices.component.html',
  styleUrl: './select-devices.component.css'
})
export class SelectDevicesComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<SelectDevicesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  searchText: string = ''
  selectedDevice: Device = {
    nome: '',
    imagem: '',
    isSelected: false,
    speed2: '',
    speed5: '',
    level2: '',
    level5: '',
    interferencia: ''
  };
  devices: Device[] = [
    {
      nome: 'Aparelho DVD',
      imagem: '/assets/imgs/devices-imgs/dvd.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
      
    },
    {
      nome: 'Aparelho de som',
      imagem: '/assets/imgs/devices-imgs/som.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Aquecedor',
      imagem: '/assets/imgs/devices-imgs/aquecedor.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Ar condicionado',
      imagem: '/assets/imgs/devices-imgs/ar.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Baby liss',
      imagem: '/assets/imgs/devices-imgs/babyliss.avif',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Barbeador',
      imagem: '/assets/imgs/devices-imgs/barbeador.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Batedeira',
      imagem: '/assets/imgs/devices-imgs/batedeira.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Cafeteira elétrica',
      imagem: '/assets/imgs/devices-imgs/cafeteira.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Carregador de celular',
      imagem: '/assets/imgs/devices-imgs/carregador.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Central de alarme',
      imagem: '/assets/imgs/devices-imgs/alarme.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Chapinha',
      imagem: '/assets/imgs/devices-imgs/chapinha.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Churrasqueira elétrica',
      imagem: '/assets/imgs/devices-imgs/churrasqueira.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Chuveiro',
      imagem: '/assets/imgs/devices-imgs/chuveiro.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Computador',
      imagem: '/assets/imgs/devices-imgs/computador.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Cortador de grama',
      imagem: '/assets/imgs/devices-imgs/cortador-grama.jpeg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Desumidificador',
      imagem: '/assets/imgs/devices-imgs/desumidificador.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Espremedor',
      imagem: '/assets/imgs/devices-imgs/espremedor.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Exaustor',
      imagem: '/assets/imgs/devices-imgs/exaustor.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Faca elétrica',
      imagem: '/assets/imgs/devices-imgs/faca-eletrica.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Fogão elétrico',
      imagem: '/assets/imgs/devices-imgs/fogao.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Forno elétrico',
      imagem: '/assets/imgs/devices-imgs/forno.png',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Freezer',
      imagem: '/assets/imgs/devices-imgs/freezer.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Fritadeira elétrica',
      imagem: '/assets/imgs/devices-imgs/fritadeira.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Geladeira',
      imagem: '/assets/imgs/devices-imgs/geladeira.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Grill',
      imagem: '/assets/imgs/devices-imgs/grill.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Hidromassagem',
      imagem: '/assets/imgs/devices-imgs/banheira.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Home theater',
      imagem: '/assets/imgs/devices-imgs/theater.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Impressora',
      imagem: '/assets/imgs/devices-imgs/impressora.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Inalador',
      imagem: '/assets/imgs/devices-imgs/inalador.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Lâmpada fluorecente',
      imagem: '/assets/imgs/devices-imgs/fluorecente.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Lâmpada LED',
      imagem: '/assets/imgs/devices-imgs/led.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Lençol elétrico',
      imagem: '/assets/imgs/devices-imgs/lencol.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Limpador a vapor',
      imagem: '/assets/imgs/devices-imgs/limpador.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Liquidificador',
      imagem: '/assets/imgs/devices-imgs/liquidificador.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Lavadora de alta pressão',
      imagem: '/assets/imgs/devices-imgs/lavadoura.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Limpador a vapor',
      imagem: '/assets/imgs/devices-imgs/limpador.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Microondas',
      imagem: '/assets/imgs/devices-imgs/microondas.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Motor elétrico',
      imagem: '/assets/imgs/devices-imgs/motor-eletrico.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Rádio relógio',
      imagem: '/assets/imgs/devices-imgs/radio.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Receptor',
      imagem: '/assets/imgs/devices-imgs/receptor.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Sanduicheira',
      imagem: '/assets/imgs/devices-imgs/sanduicheira.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Scanner',
      imagem: '/assets/imgs/devices-imgs/scanner.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Secador de cabelo',
      imagem: '/assets/imgs/devices-imgs/secador.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Telefone sem fio',
      imagem: '/assets/imgs/devices-imgs/telefone.webp',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Televisor',
      imagem: '/assets/imgs/devices-imgs/televisor.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Torradeira',
      imagem: '/assets/imgs/devices-imgs/torradeira.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Ventilador',
      imagem: '/assets/imgs/devices-imgs/ventilador.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    },
    {
      nome: 'Video game',
      imagem: '/assets/imgs/devices-imgs/play5.jpg',
      isSelected: false,
      speed2: '',
      speed5: '',
      level2: '',
      level5: '',
      interferencia: ''
    }
  ]

  speed2: string = '';
  speed5: string = '';
  level2: string = '';
  level5: string = '';

  originalDevices!: Device[];
  devicesSelected: Device[] = []
  isSelected: boolean = false;

  ngOnInit(): void {
    this.originalDevices = this.devices.slice();
    
    this.isSelected = this.data.isSelected 
    this.selectedDevice = this.data.device;
  }
  selectDevice(item: Device){
    this.isSelected = true;
    this.selectedDevice = item;
  }
  onClose() {
    
    this.isSelected = false;

    this.dialogRef.close({ 
      device: this.selectedDevice,
     });
  }
  searchDevice() {
    if (this.searchText.trim() === '') {

        this.devices = this.originalDevices.slice(); 
    } else {
        this.devices = this.originalDevices.filter(device => {
            return device.nome.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase());
        });
    }
}
}
