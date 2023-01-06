import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MonstercardComponent } from './monstercard/monstercard.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterMonstersPipe } from './pipes/filter-monsters.pipe';
import { AppInterceptorService } from './services/app-interceptor.service';
import { AddMonsterComponent } from './add-monster/add-monster.component';

@NgModule({
  declarations: [
    AppComponent,
    MonstercardComponent,
    HomeComponent,
    FilterMonstersPipe,
    AddMonsterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
