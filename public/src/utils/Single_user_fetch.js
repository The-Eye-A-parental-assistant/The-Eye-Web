import {db} from './firebaseinit';
import Child from '../models/Child';
import Creator from '../models/Creator';
import Parent from '../models/Parent';




import { doc, getDoc } from "firebase/firestore";


export async function Single_user_fetch(id,setUser){   
    const userRef = doc(db, "users", id); // Create a reference to the "videos" collection
    const userSnapshot = await getDoc(userRef); // Pass the collection reference to getDocs()

    if (userSnapshot.data().role==="child"){
      setUser(Child.fromFirestore(userSnapshot));
    }
    else if (userSnapshot.data().role==="creator"){
        setUser(Creator.fromFirestore(userSnapshot));
    }
    else{
        setUser(Parent.fromFirestore(userSnapshot));
    }
  
  }
