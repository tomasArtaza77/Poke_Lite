import { TestBed } from '@angular/core/testing';

import { ApiPokemonsService } from './api-pokemons.service';

describe('ApiPokemonsService', () => {
  let service: ApiPokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
