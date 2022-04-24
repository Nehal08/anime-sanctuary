import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedAnimesComponent } from './related-animes.component';

describe('RelatedAnimesComponent', () => {
  let component: RelatedAnimesComponent;
  let fixture: ComponentFixture<RelatedAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedAnimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
