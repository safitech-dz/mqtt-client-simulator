import { faker } from "@faker-js/faker";
import maxParser from "../rulesParsers/maxParser.js";
import minParser from "../rulesParsers/minParser.js";

export default {
    callback: (opts) => {
        return faker.datatype.number(opts);
    },

    /**
     *
     * @param {array} format
     */
    optParser: (format) => {
        const opts = {};

        const min = minParser(format);
        const max = maxParser(format);

        if (min) {
            opts.min = min;
        }

        if (max) {
            opts.max = max;
        }

        // TODO in: & between:

        return opts;
    },
};
