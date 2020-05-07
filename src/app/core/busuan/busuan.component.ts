import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busuan',
  templateUrl: './busuan.component.html',
  styleUrls: ['./busuan.component.css']
})
export class BusuanComponent implements OnInit {
  listOfColumn = [
    {
      title: '发表机构'
    },
    {
      title: '发震时间',
    },
    {
      title: '震中位置',
    },
    {
      title: '经度',
    },
    {
      title: '纬度',
    },
    {
      title: '深度',
    },
    {
      title: '震级',
    },
    {
      title: '反演',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
