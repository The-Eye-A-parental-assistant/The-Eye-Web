export default function adaptorFlags(flags) {
    const res = {
        sexual: false,
        violence: false,
        disgusting: false,
        scary: false,
        injury: false,
    };
    for (const flag of flags) {
        res[flag] = true;
    }
    return res;
}
