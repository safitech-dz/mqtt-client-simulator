import maxParser from "../rulesParsers/maxParser.js";
import minParser from "../rulesParsers/minParser.js";

export default {
    callback: (opt) => {
        const min = Math.ceil(opt.min);

        const max = Math.floor(opt.max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     *
     * @param {array} format
     */
    optParser: (format) => {
        const opts = {};

        opts["max"] = maxParser(format) ?? 1000;
        opts["min"] = minParser(format) ?? 0;

        // TODO in: & between:

        return opts;
    },
};
