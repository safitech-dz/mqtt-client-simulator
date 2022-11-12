import maxParser from "../rulesParsers/maxParser.js";
import minParser from "../rulesParsers/minParser.js";
import integerFaker from "./integerFaker.js";

export default {
    callback: (opt) => {
        const max = opt.max ?? 7;
        const min = opt.min ?? 7;

        const length = integerFaker.callback({ min, max });

        return (Math.random() + 1).toString(36).substring(length);
    },

    /**
     *
     * @param {array} format
     */
    optParser: (format) => {
        const opts = {};

        opts["max"] = maxParser(format) ?? 7;
        opts["min"] = minParser(format) ?? 7;

        return opts;
    },
};
