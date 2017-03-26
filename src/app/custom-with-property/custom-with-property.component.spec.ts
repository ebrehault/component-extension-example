import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWithPropertyComponent } from './custom-with-property.component';

describe('CustomWithPropertyComponent', () => {
  let component: CustomWithPropertyComponent;
  let fixture: ComponentFixture<CustomWithPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomWithPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomWithPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
