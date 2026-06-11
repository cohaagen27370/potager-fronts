// Dans ta librairie partagée : auth-providers.ts
import { EnvironmentProviders, LOCALE_ID, Provider, makeEnvironmentProviders } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeuix/themes/lara';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr);

export function provideCommon(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
    providePrimeNG({
      theme: {
        preset: Lara,
      },
    }),
  ]);
}
