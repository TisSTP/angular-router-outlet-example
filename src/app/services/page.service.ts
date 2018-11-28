import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  public static pageNewProfile = 'new-profile';
  public static pageViewProfile = 'view-profile';

  constructor() { }

  isNewProfile(page: string): boolean {
    return PageService.pageNewProfile === page;
  }

  isViewProfile(page: string): boolean {
    return PageService.pageViewProfile === page;
  }
}
