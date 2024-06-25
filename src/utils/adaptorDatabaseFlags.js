export default function adaptorDatabaseFlags(databaseFlags) {
    const res = [];
    for (let [key, value] of Object.entries(databaseFlags)) {
        if (value) {
            res.push(key);
        }
    }
    return res;
}