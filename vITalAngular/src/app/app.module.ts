import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BarcodeScannerPageComponent} from './views/barcode-scanner-page/barcode-scanner-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ManualInputDialogComponent } from './views/shared-components/manual-input-dialog/manual-input-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './views/login/login.component';
import {RouterModule} from '@angular/router';
import { LogoutComponent } from './views/logout/logout.component';
import { PatientOverviewComponent } from './views/patient-overview/patient-overview.component';
import { DialogWindowComponent } from './views/shared-components/dialog-window/dialog-window.component';
import { ConfirmSubmitComponent } from './views/shared-components/confirm-submit/confirm-submit.component';
import { HistoryComponent } from './views/history/history.component';
import { ChartsModule } from 'ng2-charts';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BarcodeScannerPageComponent,
    ManualInputDialogComponent,
    LoginComponent,
    LogoutComponent,
    PatientOverviewComponent,
    DialogWindowComponent,
    ConfirmSubmitComponent,
    HistoryComponent,
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatDialogModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        RouterModule,
        ChartsModule,
    ],
  entryComponents: [ManualInputDialogComponent, DialogWindowComponent, ConfirmSubmitComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
