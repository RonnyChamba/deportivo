import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProgramacionComponent } from './models/web/programacion/programacion.component';
import { HomeComponent } from './models/web/home/home.component';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { BotoneraComponent } from './shared/botonera/botonera.component';
import { FooterComponent } from './shared/footer/footer.component';
import { GridCardComponent } from './shared/grid-card/grid-card.component';
import { CardComponent } from './shared/card/card.component';
import { TablaFechaComponent } from './shared/tabla-fecha/tabla-fecha.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTableModule } from 'ng-zorro-antd/table';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ProgramacionComponent,
    HomeComponent,
    BotoneraComponent,
    FooterComponent,
    GridCardComponent,
    CardComponent,
    TablaFechaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzMenuModule,
    NzToolTipModule,
    NzIconModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzCardModule,
    NzAvatarModule,
    NzTableModule,
    NzIconModule

  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
