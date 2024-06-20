import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseinit';
import Video from '../models/video';
import Creator from '../models/Creator';

export async function Single_video_fetch(id, setVideo, setCreator) {
  const videoRef = doc(db, 'videos', id); // Create a reference to the "videos" collection
  const videoSnapshot = await getDoc(videoRef); // Pass the collection reference to getDocs()

  setVideo(Video.fromFirestore(videoSnapshot));

  const CreatorRef = doc(db, 'users', videoSnapshot.data().creatorID); // Create a reference to the "videos" collection
  const CreatorSnapshot = await getDoc(CreatorRef); // Pass the collection reference to getDocs()

  setCreator(Creator.fromFirestore(CreatorSnapshot));

  return Video.fromFirestore(videoSnapshot);
}
