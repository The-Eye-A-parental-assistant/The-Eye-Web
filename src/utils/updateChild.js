import { db } from '../utils/firebaseinit'
import { doc, updateDoc } from "firebase/firestore";

export default async function updateChild(childID, dataMap) {
    const childRef = doc(db, 'users', childID);
    await updateDoc(childRef, dataMap);
    console.log('Document updated with ID: ', childID);
}
