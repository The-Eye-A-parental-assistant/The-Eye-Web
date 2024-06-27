import { Amplify } from 'aws-amplify';
import amplifyConfig from '../amplifyconfiguration.json';
import { uploadData } from 'aws-amplify/storage';

export default async function uploadVideo(file, path, setUploadProgress) {
    Amplify.configure(amplifyConfig);

    try {
        const result = await uploadData({
            path: `public${path}`,
            data: file,
            options: {
                onProgress: ({ transferredBytes, totalBytes }) => {
                    if (totalBytes) {
                        setUploadProgress(Math.round((transferredBytes / totalBytes) * 100));
                    }
                },
                contentType: file.type,
            }
        }).result;
        return result;
    } catch (error) {
        console.log('Error : ', error);
    }
}