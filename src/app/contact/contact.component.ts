import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  checked: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  checkboxChecked() {
    this.checked = !this.checked;
  }

}
