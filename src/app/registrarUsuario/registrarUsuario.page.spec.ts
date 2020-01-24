import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistrarUsuario } from './registrarUsuario.page';

describe('RegistrarUsuario', () => {
  let component: RegistrarUsuario;
  let fixture: ComponentFixture<RegistrarUsuario>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarUsuario],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarUsuario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
