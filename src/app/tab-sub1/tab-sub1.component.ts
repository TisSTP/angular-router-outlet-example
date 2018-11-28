import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab-sub1',
  templateUrl: './tab-sub1.component.html',
  styleUrls: ['./tab-sub1.component.scss']
})
export class TabSub1Component implements OnInit {
  url = '';

  constructor() { }

  ngOnInit() {
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (e: any) => { // called once readAsDataURL is completed
        this.url = e.target.result;
      };
    }
  }

}
