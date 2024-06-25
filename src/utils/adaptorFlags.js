export default function adaptorFlags(flags) {
    const res = {
        nudity: false,
        violence: false,
        weapons: false,
        LGBTQ: false,
        disgusting: false,
        sexual: false,
        blood: false,
    };
    for (const flag of flags) {
        res[flag] = true;
    }
    return res;
}
