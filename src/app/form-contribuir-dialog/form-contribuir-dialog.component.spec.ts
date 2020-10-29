import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContribuirDialogComponent } from './form-contribuir-dialog.component';

describe('FormContribuirDialogComponent', () => {
  let component: FormContribuirDialogComponent;
  let fixture: ComponentFixture<FormContribuirDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContribuirDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContribuirDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
