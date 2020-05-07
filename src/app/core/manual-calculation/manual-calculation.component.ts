import { Component, OnInit } from '@angular/core';
interface DataItem {
  name: string;
  time: string;
  location: string;
  longitude: number;
  latitude: number;
}
@Component({
  selector: 'app-manual-calculation',
  templateUrl: './manual-calculation.component.html',
  styleUrls: ['./manual-calculation.component.css']
})
export class ManualCalculationComponent implements OnInit {
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
      title: '走向1',
    },
    {
      title: '倾向1',
    },
    {
      title: '滑动角1',
    },
    {
      title: '走向2',
    },
    {
      title: '倾向2',
    },
    {
      title: '滑动角2',
    },
    {
      title: 'PVR',
    },
    {
      title: '计算时间（秒）',
    },
    {
      title: '操作',
    }
  ];
  listOfData: DataItem[] = [
    {
      name: "a",
      time: '2020-04-01',
      location: '陕西',
      longitude: 2.33,
      latitude: 3.22,
    },
    {
      name: "a",
      time: '2020-04-01',
      location: '陕西',
      longitude: 2.33,
      latitude: 3.22,
    },
    {
      name: "a",
      time: '2020-04-01',
      location: '陕西',
      longitude: 2.33,
      latitude: 3.22,
    },
    {
      name: "a",
      time: '2020-04-01',
      location: '陕西',
      longitude: 2.33,
      latitude: 3.22,
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
