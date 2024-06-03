import { Device } from "./device.interface";

export interface Room {
    id: number | undefined,
    nome: string;
    imagem: string;
    isSelected: boolean;
    speed2: number;
    speed5: number;
    level2: number;
    level5: number;
    interferencia: number;
    temConfig: boolean
  }