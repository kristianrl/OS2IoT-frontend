import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sigfox-device-types',
  templateUrl: './sigfox-device-types.component.html',
  styleUrls: ['./sigfox-device-types.component.scss']
})
export class SigfoxDeviceTypesComponent implements OnInit {

  constructor(
    public translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {

  }

  onNewGroup() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

}
