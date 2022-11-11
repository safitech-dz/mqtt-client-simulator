import inParser from "./rulesParsers/inParser.js";
import booleanFaker from "./valueFakers/booleanFaker.js";
import floatFaker from "./valueFakers/floatFaker.js";
import integerFaker from "./valueFakers/integerFaker.js";
import randomElementFaker from "./valueFakers/randomElementFaker.js";

export default (topic) => {
    const def = topic.definition;
    // console.log("============================");

    if (topic.definition.type === "json") {
        // ! HACKS
        return;
    }

    if (def.type === "boolean") {
        topic.definition.faker.callback = booleanFaker;
    } else if (inParser(def.format)) {
        topic.definition.faker.callback = randomElementFaker;
        topic.definition.faker.opts = inParser(def.format);
    } else if (def.type === "integer") {
        topic.definition.faker.callback = integerFaker.callback;
        topic.definition.faker.opts = integerFaker.optParser(def.format);
    } else if (def.type === "float") {
        topic.definition.faker.callback = floatFaker.callback;
        topic.definition.faker.opts = floatFaker.optParser(def.format);
    }

    // console.dir(topic, { depth: null });
};
