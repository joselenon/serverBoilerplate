import * as admin from 'firebase-admin';

import AppService from './services/AppService';
import FirestoreService from './services/FirestoreService';

const FirebaseInstance = new FirestoreService();

async function init() {
  await AppService.initialize();

  return { FirebaseInstance };
}

init();

export { FirebaseInstance };
