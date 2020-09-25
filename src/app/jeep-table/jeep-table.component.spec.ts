import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeepTableComponent } from './jeep-table.component';

describe('JeepTableComponent', () => {
  let component: JeepTableComponent;
  let fixture: ComponentFixture<JeepTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeepTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeepTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
