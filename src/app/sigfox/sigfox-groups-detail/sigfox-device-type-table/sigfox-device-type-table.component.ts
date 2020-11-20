import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '@environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { SigfoxDeviceType } from '@shared/models/sigfox-device-type.model';
import { SigfoxGroup } from '@shared/models/sigfox-group.model';
import { SigfoxService } from '@shared/services/sigfox.service';

@Component({
  selector: 'app-sigfox-device-type-table',
  templateUrl: './sigfox-device-type-table.component.html',
  styleUrls: ['./sigfox-device-type-table.component.scss']
})
export class SigfoxDeviceTypeTableComponent implements OnInit, AfterViewInit {
  public sigfoxDevices: SigfoxDeviceType[];
  public dataSource = new MatTableDataSource<SigfoxDeviceType>();
  private sigfoxGroupId: number;
  @Input() sigfoxGroup: SigfoxGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'alertEmail'];
  public pageSize = environment.tablePageSize;

  constructor(
    private translate: TranslateService,
    private sigfoxService: SigfoxService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.translate.use('da');
  }

  ngOnInit(): void {
    this.sigfoxGroupId = +this.route.snapshot.paramMap.get('groupId');
    this.getSigFoxDevices();
  }

  getSigFoxDevices() {
    this.sigfoxService.getDeviceTypes(this.sigfoxGroupId)
      .subscribe((response) => {
        this.sigfoxDevices = response.data;
        this.dataSource = new MatTableDataSource<SigfoxDeviceType>(this.sigfoxDevices);
      },
        (error) => {
          console.log(error);
        }
      );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editDeviceType(row: any) {
    this.router.navigate([row.id, 'edit-device-type'], { relativeTo: this.route });
    console.log(row);
  }

}
