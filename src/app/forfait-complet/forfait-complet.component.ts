import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from '../interfaces/forfait';

@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})
export class ForfaitCompletComponent implements OnInit {
  @Input() forfaitCible: Forfait = {} as Forfait;

  constructor() { }

  ngOnInit(): void {
  }

}
