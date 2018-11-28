import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tab-main',
  templateUrl: './tab-main.component.html',
  styleUrls: ['./tab-main.component.scss']
})
export class TabMainComponent implements OnInit {

  inputForm: FormGroup;
  isShow = false;
  url = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const tabId = this.route.snapshot.firstChild.routeConfig.path;

    this.inputForm = new FormGroup({
      'tabs': new FormControl(tabId)
    });
  }

  routeTab() {
    this.router.navigate(['/' + this.inputForm.value.tabs]);
  }

  onShow() {
    console.log('show');
    this.isShow = true;
  }

  onHide() {
    console.log('hide');
    this.isShow = false;
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
