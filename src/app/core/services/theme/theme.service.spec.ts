import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ThemeService,
        { provide: PLATFORM_ID, useValue: 'browser' } // Simulamos que estamos en un navegador
      ]
    });
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should apply theme properties if in browser', () => {
    spyOn(console, 'log'); // Espiamos la función de consola para evitar que se imprima en la consola real
    service.applyTheme();
    expect(console.log).toHaveBeenCalledWith('browser'); // Verificamos que se haya llamado a la función con el argumento correcto
    // También puedes verificar que las propiedades del documento se establezcan correctamente
    // Por ejemplo:
    // expect(document.documentElement.style.getPropertyValue('--brand-gov')).toBe(`url(${service.imgBrandGov})`);
  });

  // Agrega más pruebas según tus necesidades
});
