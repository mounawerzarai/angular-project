import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imageurl } from './imageurl';

describe('Imageurl', () => {
  let component: Imageurl;
  let fixture: ComponentFixture<Imageurl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imageurl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Imageurl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
