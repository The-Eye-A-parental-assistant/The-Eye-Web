import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from './firebaseinit';

export default async function firebaseSignup(email, password, name, role, PIN) {
  let user;
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      user = userCredential.user;
      const userRef = doc(db, 'users', user.uid);
      let dataMap = null;

      if (role === "parent"){
        dataMap = {
          name,
          email,
          role,
          PIN,
          children: [],
          imageURL: 'https://firebasestorage.googleapis.com/v0/b/the-eye-66e7b.appspot.com/o/App%20Assets%2Fprofile_placeholder.png?alt=media&token=8df99a81-51ab-488b-b0e6-335069e161c9',
          transactions: [],
          isParent: true,
          plan: 'free',
          gender: 'unknown',
        };
      } else {
        dataMap = {
          name,
          email,
          role,
          videos: [],
          imageURL: 'https://firebasestorage.googleapis.com/v0/b/the-eye-66e7b.appspot.com/o/App%20Assets%2Fprofile_placeholder.png?alt=media&token=8df99a81-51ab-488b-b0e6-335069e161c9',
          transactions: [],
          gender: 'unknown',
        };
      }

      await setDoc(userRef, dataMap)
        .catch((_) => {});
    })
    .catch((error) => {
      alert(`error signning up. try again\n${error.message}`);
      return undefined;
    });

  if (user === undefined) { return undefined; }

  return user.uid;
}
