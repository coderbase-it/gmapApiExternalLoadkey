import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLazyComponent } from './page-lazy.component';

describe('PageLazyComponent', () => {
  let component: PageLazyComponent;
  let fixture: ComponentFixture<PageLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
