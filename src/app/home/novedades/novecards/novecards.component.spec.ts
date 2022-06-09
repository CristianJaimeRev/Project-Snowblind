import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovecardsComponent } from './novecards.component';

describe('NovecardsComponent', () => {
  let component: NovecardsComponent;
  let fixture: ComponentFixture<NovecardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovecardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
