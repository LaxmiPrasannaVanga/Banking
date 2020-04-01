import { Component, OnInit } from '@angular/core';
import { AdminnavService } from '../adminnav.service';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-postnews',
  templateUrl: './postnews.component.html',
  styleUrls: ['./postnews.component.css']
})
export class PostnewsComponent implements OnInit {

  constructor(private nav:NavbarService,private adminnav:AdminnavService) { }

  ngOnInit() {
    this.adminnav.show();
    this.nav.hide();
  }


}
