import maxParser from "../rulesParsers/maxParser.js";
import minParser from "../rulesParsers/minParser.js";

export default {
    callback: (opt) => {
        const min = Math.ceil(opt.min);

        const max = Math.floor(opt.max);

        return (Math.random() * (max - min) + min).toFixed(2) * 1;
    },

    /**
     *
     * @param {array} format
     */
    optParser: (format) => {
        const opts = {};

        opts["max"] = maxParser(format) ?? 1000.99;
        opts["min"] = minParser(format) ?? 0.99;

        // TODO in: & between:

        return opts;
    },
};
