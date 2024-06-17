import { db, auth } from './firebaseinit';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default async function firebaseSignup(email, password, name){
  let user = undefined;
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      user = userCredential.user;
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        name: name,
        email: email,
        role: 'parent',
        PIN: 1111,
        children: [],
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/the-eye-66e7b.appspot.com/o/App%20Assets%2Fprofile_placeholder.png?alt=media&token=8df99a81-51ab-488b-b0e6-335069e161c9',
        Transactions: [],
        isParent: true,
        plan: 'free',
      })
      .catch((error) => {});
    })
    .catch((error) => {
      alert('error signning up. try again\n' + error.message);
      return undefined;
    });

    if (user === undefined)
      return undefined;

    return user.uid;
}
