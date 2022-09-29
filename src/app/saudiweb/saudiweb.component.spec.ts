import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudiwebComponent } from './saudiweb.component';

describe('SaudiwebComponent', () => {
  let component: SaudiwebComponent;
  let fixture: ComponentFixture<SaudiwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaudiwebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaudiwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
