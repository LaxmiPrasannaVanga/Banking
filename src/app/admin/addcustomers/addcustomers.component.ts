import { Component, OnInit } from '@angular/core';
import { AdminnavService } from '../adminnav.service';
import { NavbarService } from 'src/app/navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcustomers',
  templateUrl: './addcustomers.component.html',
  styleUrls: ['./addcustomers.component.css']
})
export class AddcustomersComponent implements OnInit {

  constructor(private adminnav:AdminnavService,private nav:NavbarService,private router: Router) { }

  ngOnInit() {
    this.nav.hide();
    this.adminnav.show();
    
  }
  adminhome(){
    this.router.navigate(['/adminhome']);
  }
  addcustomers(){
    this.router.navigate(['/addcustomer']);
  }
  mycustomers(){
    this.router.navigate(['/mycustomers']);
  }
  home(){
    this.router.navigate(['/adminlogin']);
  }
 

}
