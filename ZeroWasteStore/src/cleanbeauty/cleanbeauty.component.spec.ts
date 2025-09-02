import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanbeautyComponent } from './cleanbeauty.component';

describe('CleanbeautyComponent', () => {
  let component: CleanbeautyComponent;
  let fixture: ComponentFixture<CleanbeautyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CleanbeautyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleanbeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
