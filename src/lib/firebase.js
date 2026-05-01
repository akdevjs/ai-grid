import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDgx7PI-VTdoX8gtFuKzy6j5LzOhG__BrI',
  authDomain: 'grid-fbdca.firebaseapp.com',
  projectId: 'grid-fbdca',
  storageBucket: 'grid-fbdca.firebasestorage.app',
  messagingSenderId: '279620840935',
  appId: '1:279620840935:web:309eab964f32ab53c5a142',
  measurementId: 'G-FLTTN9625K',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

let analyticsPromise = null;
export function getAnalyticsIfSupported() {
  if (!analyticsPromise) {
    analyticsPromise = isSupported().then((yes) => (yes ? getAnalytics(app) : null));
  }
  return analyticsPromise;
}
