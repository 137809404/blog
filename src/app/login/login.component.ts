import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  userMap = new Map();
  validateForm: FormGroup;

  submitForm(): void {
    this.loading = true;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if (!(this.validateForm.controls.userName.errors && this.validateForm.controls.password.errors)) {
      const userName: string = this.validateForm.value.userName;
      const password: string = this.validateForm.value.password;
      if (this.userMap.get(userName) === password) {
        setTimeout(() => {
          this.message.create('success', '登录成功!');
          this.loading = false;
          this.navigateByUrl('/core/home');
        }, 2000)
      } else {
        setTimeout(() => {
          this.message.create('error', '登录失败,请检查您的用户名或密码!');
          this.loading = false;
        }, 1000)
      }

    }
  }

  constructor(private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: ['root', [Validators.required]],
      password: ['root', [Validators.required]],
      remember: [true]
    });

    this.userMap.set("root", "root")
    this.userMap.set("jinzhuoran", "jinzuoran")
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }

}
