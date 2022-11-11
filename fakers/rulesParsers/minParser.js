/**
 *
 * @param {array} rules
 * @returns {number|null}
 */
const minParser = (rules) => {
    let min = rules.find((rule) => /^min:/.test(rule));

    if (!min) {
        return null;
    }

    return min.split(":")[1] * 1;
};

export default minParser;
