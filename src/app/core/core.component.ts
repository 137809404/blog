import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  isCollapsed:boolean = false;
  confirmModal: NzModalRef;
  primary: string = '参数设置';
  secondary: string = 'EQIM参数';
  constructor(
    private router: Router,
    private modal: NzModalService,
    private message: NzMessageService) { }

  ngOnInit() {
  }

  navigateByUrl(url: string, _primary: string = '', _secondary: string = '') {
    this.router.navigateByUrl(url);
    this.setTitle(_primary, _secondary);
  }

  setTitle(_primary: string, _secondary: string) {
    this.primary = _primary;
    this.secondary = _secondary;
  }

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: '确定要退出系统吗?',
      nzContent: '退出后,您必须重新登录',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(resolve, 1000);
        }).then(() => {
          this.message.create('success', '注销成功!');
          this.navigateByUrl('/login')
        }).catch(() => this.message.create('error', '服务器正忙,请稍后再试!'))
    });
  }
}
