import { db } from './firebaseinit'
import { doc, updateDoc, increment } from "firebase/firestore";

export default async function incrementViews(videoID) {
    const videoRef = doc(db, 'videos', videoID);
    await updateDoc(videoRef, {views: increment(1)});
}
