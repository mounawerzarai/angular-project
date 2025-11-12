import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapG1 } from "../face-snap-g1/face-snap-g1";
import { FaceSnapsService } from '../services/face- snaps.service';
@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapG1],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss'
})
export class FaceSnapList {
 faceSnaps!: FaceSnap[];

 constructor(private faceSnapsService: FaceSnapsService) { }

  ngOnInit() {
    this.faceSnaps = this.faceSnapsService.faceSnaps;
  }
  
}
