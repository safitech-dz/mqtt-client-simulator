/**
 *
 * @param {array} rules
 * @returns {number|null}
 */
const inParser = (rules) => {
    let inn = rules.find((rule) => /^in:/.test(rule));

    if (!inn) {
        return null;
    }

    return inn.split(":")[1].split(",");
};

export default inParser;
