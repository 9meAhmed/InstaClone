import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
})
export class FeedCardComponent implements OnInit {

  @Input() post: any;

  constructor(    
    private router: Router,
  ) { }

  ngOnInit() {}

  randomImage(v?){
    return 'https://picsum.photos/400/250?random=' + this.post.id.value;
  }

  navigate(page){
    this.router.navigate([page]);
  }

}
