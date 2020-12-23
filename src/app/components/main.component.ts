import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  mainForm: FormGroup

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.mainForm = this.fb.group({
      message: this.fb.control('', [Validators.required]),
    })
  }

  submit(){

    this.router.navigate(['/card'], {
      queryParams:{
        message: this.mainForm.get('message').value
      }
    })
  }

}
