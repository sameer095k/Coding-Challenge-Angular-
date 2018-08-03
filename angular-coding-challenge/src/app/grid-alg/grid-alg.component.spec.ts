import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAlgComponent } from './grid-alg.component';

describe('GridAlgComponent', () => {
  let component: GridAlgComponent;
  let fixture: ComponentFixture<GridAlgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridAlgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
