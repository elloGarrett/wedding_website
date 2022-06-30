import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPartyPageComponent } from './wedding-party-page.component';

describe('WeddingPartyPageComponent', () => {
  let component: WeddingPartyPageComponent;
  let fixture: ComponentFixture<WeddingPartyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingPartyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeddingPartyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
