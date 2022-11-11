/**
 *
 * @param {array} rules
 * @returns {number|null}
 */
const maxParser = (rules) => {
    let max = rules.find((rule) => /^max:/.test(rule));

    if (!max) {
        return null;
    }

    return max.split(":")[1] * 1;
};

export default maxParser;
