import { Component } from '@angular/core';

@Component({
  selector: 'app-face-snap-g1',
  imports: [],
  templateUrl: './face-snap-g1.html',
  styleUrl: './face-snap-g1.scss'
})
export class FaceSnapG1 {

  title!: string;
  description!: string;
  createdate!: Date;
  snaps!: number;
  imageUr1!: string;

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis tout petit';
    this.createdate = new Date();
    this.snaps = 6;
    this.imageUr1 = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';
  }

}
