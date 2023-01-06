import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-monster',
  templateUrl: './add-monster.component.html',
  styleUrls: ['./add-monster.component.css']
})
export class AddMonsterComponent {

 form:FormGroup;

  constructor(private formBuilder: FormBuilder, public router: Router) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^([a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+)+$/)])),
      phone: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')])),
    });
  }
  
  addClick() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      alert('Monster added successfully!')
      this.router.navigateByUrl('home')
    }
  }

}
