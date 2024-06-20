import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseinit';

export default async function firebaseLogin(email, password) {
  let user;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
      alert(`error logging in. try again\n${error.message}`);
      return undefined;
    });

  if (user === undefined) { return undefined; }

  return user.uid;
}
