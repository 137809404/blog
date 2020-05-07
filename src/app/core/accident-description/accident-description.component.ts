import { Component, OnInit } from '@angular/core';
import { AccidentDscriptionServiceService } from 'src/app/services/accident-dscription-service/accident-dscription-service.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-accident-description',
  templateUrl: './accident-description.component.html',
  styleUrls: ['./accident-description.component.css']
})
export class AccidentDescriptionComponent implements OnInit {

  isConfirmLoading: boolean = false;
  tableLoading: boolean = false;
  isVisible: boolean = false
  index: number = 0;
  ans1 = "";
  ans2 = "";
  ans3 = "";
  ans4 = "";
  ans5 = "";
  constructor(
    private _accidentDscriptionServiceService: AccidentDscriptionServiceService,
    private message: NzMessageService) { }

  ngOnInit() {
    this.refreshTale();
  }

  sortName: string | null = null;
  sortValue: string | null = null;
  searchAddress: string;
  listOfSearchName: string[] = [];
  listOfData = [
    {
      name: 'John Brown',
      gender: '男',
      province: '辽宁省',
      city: '沈阳市',
      company: '华为技术有限公司',
      profession: '刑事案件',
      score: '92'
    },
    {
      name: 'Jim Green',
      gender: '男',
      province: '辽宁省',
      city: '沈阳市',
      company: '华为技术有限公司',
      profession: '刑事案件',
      score: '75'
    },
    {
      name: 'Joe Black',
      gender: '男',
      province: '辽宁省',
      city: '沈阳市',
      company: '华为技术有限公司',
      profession: '刑事案件',
      score: '88'
    },
    {
      name: 'Jim Red',
      gender: '男',
      province: '辽宁省',
      city: '沈阳市',
      company: '华为技术有限公司',
      profession: '刑事案件',
      score: '94'
    },
    {
      name: 'Jim Red',
      gender: '男',
      province: '辽宁省',
      city: '沈阳市',
      company: '华为技术有限公司',
      profession: '刑事案件',
      score: '84'
    },
    {
      name: 'Jim Red',
      gender: '男',
      province: '辽宁省',
      city: '沈阳市',
      company: '华为技术有限公司',
      profession: '刑事案件',
      score: '86'
    },
    {
      name: 'Jim Red',
      gender: '男',
      province: '辽宁省',
      city: '沈阳市',
      company: '华为技术有限公司',
      profession: '刑事案件',
      score: '84'
    },
  ];
  listOfDisplayData = [
    ...this.listOfData
  ];

  sort(sort: { key: string; value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  filter(listOfSearchName: string[], searchAddress: string): void {
    this.listOfSearchName = listOfSearchName;
    this.searchAddress = searchAddress;
    this.search();
  }

  search(): void {
    /** filter data **/
    const filterFunc = (item: any) =>
      (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) &&
      (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
    const data = this.listOfData.filter(item => filterFunc(item));
    /** sort data **/
    if (this.sortName && this.sortValue) {
      this.listOfDisplayData = data.sort((a, b) =>
        this.sortValue === 'ascend'
          ? a[this.sortName!] > b[this.sortName!]
            ? 1
            : -1
          : b[this.sortName!] > a[this.sortName!]
            ? 1
            : -1
      );
    } else {
      this.listOfDisplayData = data;
    }
  }


  showModal(): void {
    this.isVisible = true;
  }

  handleCancel() {
    this.isVisible = false;
  }
  prev() {
    this.index--;
    console.log(this.index);
  }
  next() {
    if (this.index <= 4)
      this.index++;
    //完成状态
    if (this.index == 5) {
      this.isConfirmLoading = true;
      const description = [this.ans1, this.ans2, this.ans3, this.ans4, this.ans5].join(" ");
      this._accidentDscriptionServiceService.findByRelatedLabel(description).subscribe(result => {
        this.listOfData = result;
        setTimeout(() => {
          this.isConfirmLoading = false;
          this.isVisible = false;
          this.refreshTale();
          this.message.create('success', '推荐列表已更新!');
        }, 1500)
        this.ans1 = this.ans2 = this.ans3 = this.ans4 = this.ans5 = "";
      }, error => {
        setTimeout(() => {
          this.isConfirmLoading = false;
          this.isVisible = false;
          this.message.create('error', '服务器正忙,请稍后再试!')
        }, 3000)
      })
    }

  }

  refreshTale() {
    this.tableLoading = true;
    setTimeout(() => {
      this.tableLoading = false;
    }, 1500)
  }

}
