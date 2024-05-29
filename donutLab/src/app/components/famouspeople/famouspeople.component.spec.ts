import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamouspeopleComponent } from './famouspeople.component';

describe('FamouspeopleComponent', () => {
  let component: FamouspeopleComponent;
  let fixture: ComponentFixture<FamouspeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamouspeopleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamouspeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
