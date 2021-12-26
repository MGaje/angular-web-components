import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickHttpTestComponent } from './quick-http-test.component';

describe('QuickHttpTestComponent', () => {
  let component: QuickHttpTestComponent;
  let fixture: ComponentFixture<QuickHttpTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickHttpTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickHttpTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
