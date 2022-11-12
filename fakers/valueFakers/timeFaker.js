import { faker } from "@faker-js/faker";
import moment from "moment";

export default () => {
    return moment
        .unix(
            Date.now() +
                faker.datatype.number({ min: 0, max: 24 * 60 * 60 * 1000 })
        )
        .format("HH:mm");
};

// TODO: consider the format in the rule
