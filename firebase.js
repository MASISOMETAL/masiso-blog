import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  // Aquí pega los datos de configuración de tu proyecto de Firebase
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();