import inParser from "./rulesParsers/inParser.js";
import booleanFaker from "./valueFakers/booleanFaker.js";
import floatFaker from "./valueFakers/floatFaker.js";
import integerFaker from "./valueFakers/integerFaker.js";
import arrayElement from "./valueFakers/arrayElement.js";
import stringFaker from "./valueFakers/stringFaker.js";
import timeFaker from "./valueFakers/timeFaker.js";

export default (topic) => {
    const def = topic.definition;
    // console.log("============================");

    if (topic.definition.type === "json") {
        // ! HACKS
        return;
    }

    if (def.type === "boolean") {
        topic.definition.faker.callback = booleanFaker;
    } else if (def.type === "time") {
        topic.definition.faker.callback = timeFaker;
    } else if (inParser(def.format)) {
        topic.definition.faker.callback = arrayElement;
        topic.definition.faker.opts = inParser(def.format);
    } else if (def.type === "integer") {
        topic.definition.faker.callback = integerFaker.callback;
        topic.definition.faker.opts = integerFaker.optParser(def.format);
    } else if (def.type === "float") {
        topic.definition.faker.callback = floatFaker.callback;
        topic.definition.faker.opts = floatFaker.optParser(def.format);
    } else if (def.type === "string") {
        topic.definition.faker.callback = stringFaker.callback;
        topic.definition.faker.opts = stringFaker.optParser(def.format);
    }

    // console.dir(topic, { depth: null });
};
