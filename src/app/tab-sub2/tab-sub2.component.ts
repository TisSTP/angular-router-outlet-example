import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-sub2',
  templateUrl: './tab-sub2.component.html',
  styleUrls: ['./tab-sub2.component.scss']
})
export class TabSub2Component implements OnInit {

  dataList = ['A', 'B', 'C', 'D'];
  selectedList = ['B', 'D'];

  constructor() { }

  ngOnInit() {
    let result = this.dataList.map(item => {
      return this.selectedList.includes(item) ? 1 : 0;
    });

    console.log(result);
  }

}
