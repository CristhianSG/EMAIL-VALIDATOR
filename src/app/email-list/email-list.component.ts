import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EmailValidatorService } from '../services/email-validator.service';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css'],
})
export class EmailListComponent implements OnInit {
  @Output()
  propagar = new EventEmitter<string>();
  frmEmail!: FormGroup;
  emailsList: string[] = [];

  constructor(
    private emailsService: EmailValidatorService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.emailsList = this.emailsService.getEmails();
    this.frmEmail = this.fb.group({
      email: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.emailsService.addEmail(this.frmEmail.controls["email"].value)
    this.frmEmail.controls["email"].setValue("")
  }

  addEmail(email: string) {
    this.emailsService.addEmail(email);
  }
  
  completarEmails(){
    this.emailsList = this.emailsService.getEmails()
  }

  deleteEmail(email: string){
    this.emailsService.deleteEmail(email);
    this.completarEmails()
  }

}
