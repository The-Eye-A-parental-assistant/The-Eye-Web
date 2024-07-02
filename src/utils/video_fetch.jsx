import {db} from './firebaseinit';
import Video from '../models/video';
import { collection, query, where, getDocs, limit } from "firebase/firestore";
import generatePrefsOptions from './generatePrefsOptions';


export async function video_fetch(setVideos, prefs, url = ""){
    let queryOptions = generatePrefsOptions(prefs);
    if (queryOptions.length > 30)
        queryOptions.length = 30;

    var newvideos = [];

    const q = query(collection(db, "videos"), 
                    where("status", "==", "Finished"),
                    where("videoURL", "!=", url),
                    where("tags", "in",  queryOptions),
                    limit(10)
                );
    
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => newvideos.push(Video.fromFirestore(doc)));

    setVideos(newvideos)
}
