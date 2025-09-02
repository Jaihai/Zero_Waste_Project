import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathbodyComponent } from './bathbody.component';

describe('BathbodyComponent', () => {
  let component: BathbodyComponent;
  let fixture: ComponentFixture<BathbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BathbodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
