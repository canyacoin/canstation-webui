import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';

import { TopComponent } from './top/top.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { GasInputComponent } from './gas-input/gas-input.component';
import { GasCostsComponent } from './gas-costs/gas-costs.component';
import { CommaSepNumPipe } from './comma-sep-num.pipe';
import { GasApiService } from './gas-api.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { GasCostsVsWaitTimeChartComponent } from './gas-costs-vs-wait-time-chart/gas-costs-vs-wait-time-chart.component';
import { GasCostsEstimatesOverTimeChartComponent } from './gas-costs-estimates-over-time-chart/gas-costs-estimates-over-time-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    GasInputComponent,
    GasCostsComponent,
    CommaSepNumPipe,
    GasCostsVsWaitTimeChartComponent,
    GasCostsVsWaitTimeChartComponent,
    GasCostsEstimatesOverTimeChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    // AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFirestoreModule.enablePersistence(), // imports firebase/firestore, only needed for database features
    ChartsModule
  ],
  providers: [AuthGuard, DatePipe, GasApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
