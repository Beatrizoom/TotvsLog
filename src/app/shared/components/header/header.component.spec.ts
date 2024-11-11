import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { DashboardComponent } from '../../../dashboard/dashboard.component';
import { DeliveryListComponent } from '../../../deliveries/delivery-list/delivery-list.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: DashboardComponent },
          { path: 'deliveries', component: DeliveryListComponent },
        ]),
        HeaderComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct routerLinks on nav buttons', () => {
    fixture.detectChanges(); 

    const buttons = fixture.debugElement.queryAll(By.css('nav button'));
    expect(buttons.length).toBe(2);

   
    expect(buttons[0].nativeElement.getAttribute('routerLink')).toBe('/');
    expect(buttons[1].nativeElement.getAttribute('routerLink')).toBe('/deliveries');
  });
});
