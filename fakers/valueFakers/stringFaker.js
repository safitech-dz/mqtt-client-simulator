import { faker } from "@faker-js/faker";
import maxParser from "../rulesParsers/maxParser.js";
import minParser from "../rulesParsers/minParser.js";

export default {
    callback: (opt) => faker.datatype.string(opt.max),

    /**
     *
     * @param {array} format
     */
    optParser: (format) => {
        const opts = {};

        opts.max = maxParser(format) ?? 7;
        opts.min = minParser(format) ?? 7;

        return opts;
    },
};
