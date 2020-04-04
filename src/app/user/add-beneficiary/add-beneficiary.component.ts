import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {

  constructor(private nav:NavbarService) { }

  ngOnInit() {
    this.nav.hide();
  }

}
