import { Component, OnInit, Input } from '@angular/core';
import { IDaytile } from '../models/daytile';

@Component({
  selector: 'app-daytile',
  templateUrl: './daytile.component.html',
  styleUrls: ['./daytile.component.css']
})
export class DaytileComponent implements OnInit {
@Input() dayTileInfo:IDaytile;
  constructor() { }

  ngOnInit() {
  }

}
