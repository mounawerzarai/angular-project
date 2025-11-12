import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-face-snap-g1',
  imports: [NgClass],
  templateUrl: './face-snap-g1.html',
  styleUrl: './face-snap-g1.scss'
})
export class FaceSnapG1 implements OnInit {

  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if(this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
