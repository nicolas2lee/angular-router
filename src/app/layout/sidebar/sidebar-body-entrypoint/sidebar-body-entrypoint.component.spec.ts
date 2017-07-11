import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBodyEntrypointComponent } from './sidebar-body-entrypoint.component';

describe('SidebarBodyEntrypointComponent', () => {
  let component: SidebarBodyEntrypointComponent;
  let fixture: ComponentFixture<SidebarBodyEntrypointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarBodyEntrypointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarBodyEntrypointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
