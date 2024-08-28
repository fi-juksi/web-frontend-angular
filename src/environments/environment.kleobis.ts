// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from './model';

export const environment: Environment = {
  production: true,
  disableRegistration: false,
  backend: 'https://rest.juksi.fi.muni.cz/',
  edulint: {
    url: 'https://edulint.com',
    version: 'latest',
    config: 'https://juksi.fi.muni.cz/assets/edulint/ksi.toml'
  },
  urlPrefix: '/',
  logger: {
    log: console.log,
    error: console.error,
    debug: console.debug,
    warn: console.warn
  },
  oldFrontendUrl: 'https://juksi-admin.iamroot.eu'
};
