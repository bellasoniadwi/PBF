import admin from 'firebase-admin';
import serviceAccount from "./serviceAccountKey.json";

if(!admin.apps.length){
    try{
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
    } catch(error){
        console.log('firebase-admin initialization error', error.stack);
    }
}
export default admin.firestore();