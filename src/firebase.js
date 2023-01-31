import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRnSOFCeo-X3-7D162o8298RTUqEYhQS8",
  authDomain: "auth2-adc67.firebaseapp.com",
  projectId: "auth2-adc67",
  storageBucket: "auth2-adc67.appspot.com",
  messagingSenderId: "61807613468",
  appId: "1:61807613468:web:27c6161f91eeb3166fb1d9"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);