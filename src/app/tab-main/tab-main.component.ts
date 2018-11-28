import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../services/page.service';

@Component({
  selector: 'app-tab-main',
  templateUrl: './tab-main.component.html',
  styleUrls: ['./tab-main.component.scss']
})
export class TabMainComponent implements OnInit {

  inputForm: FormGroup;
  isShow = false;

  prefixPath = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public pageService: PageService
  ) { }

  ngOnInit() {
    this.buildForm();

    // get data from routing
    this.route.data.subscribe(value => {
      if (typeof value['page'] !== 'undefined') {
        this.prefixPath = value['page'];
      } else {
        // default prefix path
        this.prefixPath = PageService.pageNewProfile;
      }
    });
  }

  buildForm() {
    const tabId = this.route.snapshot.firstChild.routeConfig.path;

    this.inputForm = new FormGroup({
      'tabs': new FormControl(tabId)
    });
  }

  routeTab() {
    this.router.navigate([this.prefixPath + '/' + this.inputForm.value.tabs]);
  }

  onShow() {
    console.log('show');
    this.isShow = true;
  }

  onHide() {
    console.log('hide');
    this.isShow = false;
  }

}
