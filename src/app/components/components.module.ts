import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [IonicModule, CommonModule, SwiperModule],
  declarations: [FeedCardComponent],
  exports:[FeedCardComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompomentsModule {}
