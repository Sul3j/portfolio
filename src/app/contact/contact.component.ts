import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConnectBackendService } from '../connect-backend.service';
interface Model {
  name: string;
  email: string;
  subject: string;
  message: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  checked: boolean = false;
  model: Partial<Model> = {};
  response = "";

  constructor(private connectBackendService: ConnectBackendService) { }

  ngOnInit(): void {
    this.model = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  checkboxChecked() {
    this.checked = !this.checked;
  }

  send() {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');

    const model: Partial<Model> = this.model;
    
    this.connectBackendService.onSendService(model, headers);
  }

}
