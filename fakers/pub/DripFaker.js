export default {
    topic: `%u/%d/actuator/irrignnov_V1/drip`,

    fake: () =>
        `[
        ${Math.floor(Math.random() * 100_00) / 100},
        ${Math.floor(Math.random() * 1000)},
        ${Math.floor(Math.random() * 1000)}
    ]`.replace(/\s/g, ""),

    frequency: 5 * 60 * 1000,
};
