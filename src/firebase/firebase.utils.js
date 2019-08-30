import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config =  {
    apiKey: "AIzaSyBArn787k0WWt_ALpoUHQVjUz-IhOjn2_I",
    authDomain: "crwn-db-37269.firebaseapp.com",
    databaseURL: "https://crwn-db-37269.firebaseio.com",
    projectId: "crwn-db-37269",
    storageBucket: "",
    messagingSenderId: "763916876713",
    appId: "1:763916876713:web:9fe01017f46e3eec"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();

      if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData

          }) 
        } catch (error) {
          console.log('error creating user', error.message);
        }
      }

      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export  const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;