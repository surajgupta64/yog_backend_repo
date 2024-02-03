// firebase.config.ts
import * as admin from 'firebase-admin';

const serviceAccount = require('./../../../simple-api-9698b-firebase-adminsdk-ulegn-2da77ba5bb.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'nestjs-project-c6f01.appspot.com',
});

export const firebaseAdmin = admin;
