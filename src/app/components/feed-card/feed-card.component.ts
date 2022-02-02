import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
})
export class FeedCardComponent implements OnInit {

  @Input() post: any;

  constructor() { }

  ngOnInit() {}

  randomImage(v?){
    return 'https://picsum.photos/400/250?random=' + this.post.id.value;
  }

}
