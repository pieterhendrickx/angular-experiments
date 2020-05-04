import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInputExperimentsComponent } from './text-input-experiments.component';

describe('TextInputExperimentsComponent', () => {
  let component: TextInputExperimentsComponent;
  let fixture: ComponentFixture<TextInputExperimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInputExperimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInputExperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
