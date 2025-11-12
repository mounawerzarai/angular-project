import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
import { FaceSnapComponent } from "./face-snap-g1/face-snap-g1";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [FaceSnapComponent, NgFor]
  
  
})
export class AppModule implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 0
      },
      {
        title: 'Three Rock Mountain',
        description: 'Un endroit magnifique pour les randonnées.',
        imageUrl:'https://www.mmv.fr/images/cms/paysage-montagne-ete/paysage-montagne-mont-blanc.jpg?frz-v=559',
        createdDate: new Date(),
        snaps: 0
      },
      {
        title: 'Un bon repas',
        description: 'Mmmh que c bon !',
        imageUrl: 'https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_1280.jpg',
        createdDate: new Date(),
        snaps: 0
      }

    ];
      
  }
}