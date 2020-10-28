import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ApplicationsComponent } from './applications.component';
import { FormModule } from '@shared/components/forms/form.module';
import { TopBarModule } from '@shared/components/top-bar/top-bar.module';
import { ApplicationDetailComponent } from './application-detail/application-detail.component';
import { ApplicationEditComponent } from './application-edit/application-edit.component';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { ApplicationsTableComponent } from './applications-list/applications-table/applications-table.component';
import { ApplicaitonsRoutingModule } from './applications-routing.module';
import { DatatargetModule } from './datatarget/datatarget.module';
import { IotDevicesModule } from './iot-devices/iot-devices.module';
import { SharedModule } from '@shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DirectivesModule } from '@shared/directives/directives.module';
import { HttpClientModule } from '@angular/common/http';
import { NGMaterialModule } from '@shared/Modules/materiale.module';
import { BulkImportComponent } from './bulk-import/bulk-import.component';
import { DeleteDialogComponent } from '@shared/components/delete-dialog/delete-dialog.component';


@NgModule({
    declarations: [
        ApplicationsComponent,
        ApplicationDetailComponent,
        ApplicationEditComponent,
        ApplicationsListComponent,
        ApplicationsTableComponent,
        BulkImportComponent
    ],
    exports: [
        ApplicaitonsRoutingModule,
        ApplicationsComponent,
        ApplicationsTableComponent

    ],
    imports: [
        CommonModule,
        TopBarModule,
        RouterModule,
        TranslateModule,
        IotDevicesModule,
        DatatargetModule,
        DirectivesModule,
        HttpClientModule,
        FormModule,
        SharedModule,
        FontAwesomeModule,
        NGMaterialModule,
    ],
})
export class ApplicationsModule { }
