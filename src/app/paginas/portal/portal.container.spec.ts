import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalContainer } from './portal.container';

describe('PortalContainer', () => {
  let component: PortalContainer;
  let fixture: ComponentFixture<PortalContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
