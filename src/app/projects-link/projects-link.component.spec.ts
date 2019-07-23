import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsLinkComponent } from './projects-link.component';

describe('ProjectsLinkComponent', () => {
  let component: ProjectsLinkComponent;
  let fixture: ComponentFixture<ProjectsLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
