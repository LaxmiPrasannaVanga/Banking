import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-atmsimulator',
  templateUrl: './atmsimulator.component.html',
  styleUrls: ['./atmsimulator.component.css']
})
export class AtmsimulatorComponent implements OnInit {

  constructor(private nav:NavbarService) { }

  ngOnInit() {
    this.nav.hide();
  }

}
