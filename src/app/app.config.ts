import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),  provideFirebaseApp(() => initializeApp({ projectId: "nglegal-c47c1", appId: "1:22759669734:web:157ee0a63049c01f716027", storageBucket: "nglegal-c47c1.firebasestorage.app", apiKey: "AIzaSyCNZq2TzfsxR3NTHDnCYa-cnvnRsrvlosA", authDomain: "nglegal-c47c1.firebaseapp.com", messagingSenderId: "22759669734" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
