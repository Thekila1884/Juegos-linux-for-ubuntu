import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js';
import { getAnalytics, isSupported, logEvent } from 'https://www.gstatic.com/firebasejs/12.1.0/firebase-analytics.js';

const firebaseConfig = {
  apiKey: 'AIzaSyDhTX1wF-l3fMPMnnN0m3aagvjI9i1utJU',
  authDomain: 'juegos-1e0c0.firebaseapp.com',
  projectId: 'juegos-1e0c0',
  storageBucket: 'juegos-1e0c0.firebasestorage.app',
  messagingSenderId: '145179206787',
  appId: '1:145179206787:web:350d0c551dcdb02c5ee7b6',
  measurementId: 'G-LDF3RF8EHQ'
};

const app = initializeApp(firebaseConfig);
let analytics = null;

isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
}).catch(() => {
  // Analytics no está disponible en todos los navegadores o contextos locales.
});

export function trackEvent(name, parameters = {}) {
  if (analytics) {
    logEvent(analytics, name, parameters);
  }
}
