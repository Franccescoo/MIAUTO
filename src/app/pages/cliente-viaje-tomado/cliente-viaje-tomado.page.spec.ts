import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClienteViajeTomadoPage } from './cliente-viaje-tomado.page';

describe('ClienteViajeTomadoPage', () => {
  let component: ClienteViajeTomadoPage;
  let fixture: ComponentFixture<ClienteViajeTomadoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteViajeTomadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteViajeTomadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
