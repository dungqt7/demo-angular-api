import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { Profile } from '../profile';
import { Router } from '@angular/router';
import { ProfileService } from '../demo/profile.service';
import { pipe } from '@angular/core/src/render3/pipe';
import { tap, map } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { } from '@angular/core';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  model = new Profile();
  demo1 = true;
  img = '';
  errors = [];
  count = 0;
  countSubmit = 0;
  number = 1;
  validateForm: FormGroup;
  @ViewChild('fileInput') fileInput: ElementRef;
  constructor(private router: Router, private profileService: ProfileService, private fb: FormBuilder, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.validateForm = this.fb.group({
      fullname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern(/^[a-zA-Z0-9]*$/)]],
      age: [''],
      photo: ['', [Validators.required]],
    });
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  submitForm() {
    const formModel = this.prepareSave();
    this.profileService.addProfile(formModel).subscribe(demo => {
    });
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.validateForm.get('photo').setValue(file.name);
      this.img =  file.name;
    }
  }

  private prepareSave(): any {
    const input = new FormData();
    input.append('fullname', this.validateForm.get('fullname').value);
    input.append('age', this.validateForm.get('age').value);
    input.append('photo', this.validateForm.get('photo').value);
    return input;
  }
}
