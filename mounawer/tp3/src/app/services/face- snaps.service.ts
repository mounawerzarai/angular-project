import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 0
      },
      {
        title: 'Three rock mountain',
        description: 'Endroit magnifique',
        imageUrl: 'https://media.timeout.com/images/106150176/1024/768/image.webp',
        createdDate: new Date(),
        snaps: 0
      },
      {
        title: 'Un bon repas',
        description: 'Yumm c bon !',
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate: new Date(),
        snaps: 0
      }
    ]
}