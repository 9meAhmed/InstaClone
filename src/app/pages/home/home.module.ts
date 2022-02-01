import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { SwiperModule } from 'swiper/angular';
import { CompomentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule,
    CompomentsModule
  ],
  declarations: [HomePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomePageModule {}
