
import { Component } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss'
})
export class faceSnap{
    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public createdDate: Date,
        public snaps: number,
    ) {}
}
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;  
  buttonText!: string;

  ngOnInit(): void {
    this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, un Snap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }}