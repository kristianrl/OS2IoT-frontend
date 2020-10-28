import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilesModule } from './profiles/profiles.module';
import { AuthJwtInterceptor } from '@shared/helpers/auth-jwt.interceptor';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { GatewayModule } from './gateway/gateway.module';
import { SharedVariableModule } from '@shared/shared-variable/shared-variable.module';
import { SAVER, getSaver } from '@shared/providers/saver.provider';
import { ErrorPageComponent } from './error-page/error-page.component';
import { SearchModule } from './search/search.module';
import { DeviceModelModule } from './device-model/device-model.module';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [AppComponent, ErrorPageComponent],
    imports: [
        SharedVariableModule.forRoot(),
        AuthModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        DashboardModule,
        NavbarModule,
        ProfilesModule,
        TranslateModule.forRoot({
            defaultLanguage: 'da',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        NgbModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        GatewayModule,
        SearchModule,
    ],
    bootstrap: [AppComponent],
    exports: [TranslateModule],
    providers: [
        // use these two providers only in dev environment
        //{ provide: ErrorHandler, useClass: GlobalErrorHandler },
        //{ provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: AuthJwtInterceptor, multi: true },
        { provide: SAVER, useFactory: getSaver },
    ],
})
export class AppModule { }
