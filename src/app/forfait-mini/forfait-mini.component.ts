import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from '../interfaces/forfait';

@Component({
  selector: 'app-forfait-mini',
  templateUrl: './forfait-mini.component.html',
  styleUrls: ['./forfait-mini.component.css']
})
export class ForfaitMiniComponent implements OnInit {

  @Input() forfaitCible: Forfait = {} as Forfait;
  //forfaitCourant2  = {};
  //@Input() destination= "";

  constructor() { }

  ngOnInit(): void {
  }

}
