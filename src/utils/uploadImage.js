import { storage } from "./firebaseinit";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default async function uploadImage(file) {
    const imageRef = ref(storage, "profile_pics/");
    const imageSnapshot = await uploadBytes(imageRef, file);
    getDownloadURL(imageSnapshot.ref).then((url) => {
        return url;
    });
}
