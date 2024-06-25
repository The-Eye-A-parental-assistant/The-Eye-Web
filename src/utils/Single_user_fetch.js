import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseinit';
import Child from '../models/Child';
import Creator from '../models/Creator';
import Parent from '../models/Parent';

export async function Single_user_fetch(id, setUser) {
  const userRef = doc(db, 'users', id); // Create a reference to the "videos" collection
  const userSnapshot = await getDoc(userRef); // Pass the collection reference to getDocs()

  if (userSnapshot.data().role === 'child') {
    setUser(Child.fromFirestore(userSnapshot));
    return Child.fromFirestore(userSnapshot);
  }
  if (userSnapshot.data().role === 'creator') {
    setUser(Creator.fromFirestore(userSnapshot));
    return Creator.fromFirestore(userSnapshot);
  }
  if (userSnapshot.data().role === 'parent') {
    setUser(Parent.fromFirestore(userSnapshot));
    return Parent.fromFirestore(userSnapshot);
  }
  return undefined;
}
