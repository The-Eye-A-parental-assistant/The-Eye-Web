import Cookies from 'js-cookie';
import { db } from '../utils/firebaseinit'
import { doc, updateDoc } from "firebase/firestore";

export default async function updateChild(child, dataMap) {
    Cookies.set('child', JSON.stringify(child));

    const childRef = doc(db, 'users', child.id);
    await updateDoc(childRef, dataMap);
}
