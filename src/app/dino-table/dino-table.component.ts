import { Component, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { DinotableService, DinoTableService } from '../services/dinotable.service';

export interface ChipColor {
  name: string,
  color: ThemePalette,
}

@Component({
  selector: 'app-dino-table',
  templateUrl: './dino-table.component.html',
  styleUrls: ['./dino-table.component.scss']
})


export class DinoTableComponent implements OnInit {

  constructor(private dinoTableService: DinoTableService) { }
  
  availableColors: ChipColor[] = [
    {name: 'Triceratops', color: 'primary'},
    {name: 'Brachiosaurus', color: 'primary'},
    {name: 'Stegosaurus', color: 'accent'},
    {name: 'T-Rex', color: 'warn'}
  ];

  ngOnInit(): void {
  }

}





