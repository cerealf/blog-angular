import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
