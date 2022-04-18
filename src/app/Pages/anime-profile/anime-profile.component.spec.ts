import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeProfileComponent } from './anime-profile.component';

describe('AnimeProfileComponent', () => {
  let component: AnimeProfileComponent;
  let fixture: ComponentFixture<AnimeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
