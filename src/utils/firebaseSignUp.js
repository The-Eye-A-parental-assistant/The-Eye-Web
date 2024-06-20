import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db, auth } from './firebaseinit';

export default async function firebaseSignup(email, password, name) {
  let user;
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      user = userCredential.user;
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        name,
        email,
        role: 'parent',
        PIN: 1111,
        children: [],
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/the-eye-66e7b.appspot.com/o/App%20Assets%2Fprofile_placeholder.png?alt=media&token=8df99a81-51ab-488b-b0e6-335069e161c9',
        Transactions: [],
        isParent: true,
        plan: 'free',
      })
        .catch((_) => {});
    })
    .catch((error) => {
      alert(`error signning up. try again\n${error.message}`);
      return undefined;
    });

  if (user === undefined) { return undefined; }

  return user.uid;
}
