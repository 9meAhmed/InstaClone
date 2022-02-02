import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { SwiperComponent } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
import { IonicSlides } from '@ionic/angular';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private records = 10;
  private pageNo = 1;
  public feed:any = [];

  public stories = [null,null,null,null,null,null];

  public slideOpts: SwiperOptions = {
    slidesPerView:5,
    spaceBetween: 10,
    initialSlide: 0,
    speed: 400,
    pagination: false,
    observer: true,
    observeParents: true,
  };

  private slides: any;
  @ViewChild('studentCards') swiper: SwiperComponent;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getUserPostFeed();
  }

  getUserPostFeed(){
    this.apiService.getUserPostFeed(this.pageNo, this.records).subscribe(resp => {
      this.feed = resp.results;
    });
  }

  doRefresh(e){
    this.pageNo = 1;
    this.feed = [];
    this.apiService.getUserPostFeed(this.pageNo, this.records).subscribe(resp => {
      if (resp.results) {
        for (let item of resp.results) {
          this.feed.push(item);
        }
      }
      if (e) e.target.complete();
    });
  }

  loadMore(e){
    this.pageNo++;
    this.apiService.getUserPostFeed(this.pageNo, this.records).subscribe(resp => {
      if (resp.results) {
        for (let item of resp.results) {
          this.feed.push(item);
        }
      }
      if (e) e.target.complete();
    });
  }

  setSwiperInstance(swiper: any) {
    console.log(swiper);
    this.slides = swiper;
    let index = this.slides.activeIndex;
    this.slideOpts.initialSlide = index;
  }

  slideDidChange(){
    // if(this.swiper.swiperRef){
    //   let index = this.swiper.swiperRef.activeIndex;
    //   console.log(index);
    // }
  }

  randomImage(v?){
    let temp = Math.random();
    return 'https://picsum.photos/200?random=' + v.id.value;
  }
}
