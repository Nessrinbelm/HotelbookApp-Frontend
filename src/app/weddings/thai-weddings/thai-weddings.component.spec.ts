import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaiWeddingsComponent } from './thai-weddings.component';

describe('ThaiWeddingsComponent', () => {
  let component: ThaiWeddingsComponent;
  let fixture: ComponentFixture<ThaiWeddingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThaiWeddingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThaiWeddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
