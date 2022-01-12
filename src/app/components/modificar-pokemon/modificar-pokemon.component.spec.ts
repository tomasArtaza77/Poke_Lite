import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPokemonComponent } from './modificar-pokemon.component';

describe('ModificarPokemonComponent', () => {
  let component: ModificarPokemonComponent;
  let fixture: ComponentFixture<ModificarPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
