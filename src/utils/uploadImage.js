import { storage } from "./firebaseinit";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default async function uploadImage(file, path) {
    const imageRef = ref(storage, path);
    const imageSnapshot = await uploadBytes(imageRef, file);
    return await getDownloadURL(imageSnapshot.ref);
}
