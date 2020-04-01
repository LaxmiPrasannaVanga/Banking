import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';
import { Router } from '@angular/router';
import { AdminnavService } from '../adminnav.service';

@Component({
  selector: 'app-editandupdate',
  templateUrl: './editandupdate.component.html',
  styleUrls: ['./editandupdate.component.css']
})
export class EditandupdateComponent implements OnInit {

  constructor(private nav:NavbarService,private router: Router,private adminnav:AdminnavService) { }

  ngOnInit() {
   this.adminnav.show();
    this.nav.hide();
   
  }
}
