import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: string;

  constructor() { }

  ngOnInit() {
  }

  onLove() {
    console.log('Love +1');
  }

  onHate() {
    console.log('Hate +1');
  }

  getColor() {
    if(this.postLoveIts > 0) {
      return 'green';
    } else if(this.postLoveIts < 0) {
      return 'red';
    }
  }
}
