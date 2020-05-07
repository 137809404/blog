import { Component, OnInit ,Input, TemplateRef} from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
interface DataItem {
  name: string;
  time: string;
  location: string;
  longitude: number;
  latitude: number;
}
@Component({
  selector: 'app-auto-calculation',
  templateUrl: './auto-calculation.component.html',
  styleUrls: ['./auto-calculation.component.css']
})
export class AutoCalculationComponent implements OnInit {
  validateForm: FormGroup;
  tplModal: NzModalRef;
  tplModalButtonLoading = false;
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
  fileList = [

  ];
  constructor(private modal: NzModalService,private fb:FormBuilder) { }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      longitude: [null, [Validators.required]],
      latitude: [null, [Validators.required]],
      depth: [null, [Validators.required]],
      magnitude: [null, [Validators.required]],
      time: [null, [Validators.required]],
      institution: [null, [Validators.required]],
      epicenter: [null,[Validators.required]],
      minEpicDistance: [null,[Validators.required]],
      maxEpicDistance: [null,[Validators.required]],
      minFilterPara: [null,[Validators.required]],
      maxFilterPara: [null,[Validators.required]]
    });
  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modal.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: true,
      nzClosable: true,
      nzComponentParams: {
        value: 'Template Context'
      },
      nzOnOk: () => console.log('Click ok')
    });
  }

  destroyTplModal(): void {
    this.tplModalButtonLoading = true;
    setTimeout(() => {
      this.tplModalButtonLoading = false;
      this.tplModal.destroy();
    }, 1000);
  }

  resetForm(): void {
    this.validateForm.reset();
  }

}
