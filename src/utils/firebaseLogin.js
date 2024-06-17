import { auth } from './firebaseinit';
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function firebaseLogin(email, password){
  let user = undefined;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
      alert('error logging in. try again\n' + error.message);
      return undefined;
    });

  if (user === undefined)
    return undefined;

  return user.uid;
}
