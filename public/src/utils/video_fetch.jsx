import {db} from './firebaseinit';
import Video from '../models/video';


import { collection, getDocs } from "firebase/firestore";
import { set } from 'firebase/database';


export async function video_fetch(videos,setVideos){
 const newvideos = [];
   

    const videosCollectionRef = collection(db, "videos"); // Create a reference to the "videos" collection
    const querySnapshot = await getDocs(videosCollectionRef); // Pass the collection reference to getDocs()
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
        newvideos.push(Video.fromFirestore(doc));
        
    //    videos.push(Video.fromFirestore(doc));
       
    });
    setVideos(newvideos)
  }
