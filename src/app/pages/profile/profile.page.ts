import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  gallary = [
    'https://picsum.photos/200?random=1',
    'https://picsum.photos/200?random=2',
    'https://picsum.photos/200?random=3',
    'https://picsum.photos/200?random=4',
    'https://picsum.photos/200?random=5',
    'https://picsum.photos/200?random=6',
    'https://picsum.photos/200?random=7',
    'https://picsum.photos/200?random=8',
    'https://picsum.photos/200?random=9',
    'https://picsum.photos/200?random=10',
    'https://picsum.photos/200?random=11',
    'https://picsum.photos/200?random=12',
  ];

  constructor() { }

  ngOnInit() {
  }

  randomImage(v?){
    let temp = Math.random();
    return 'https://picsum.photos/200?random=' + v;
  }

}
