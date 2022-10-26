export default {
    topic: `%u/%d/irrignnov_V1/sprinkler`,

    fake: () =>
        `[
        ${Math.floor(Math.random() * 100 * 100) / 100},
        ${Math.floor(Math.random() * 1000)},
        ${Math.floor(Math.random() * 1000)},
        ${Math.floor(Math.random() * 20 * 100) / 100}
    ]`.replace(/\s/g, ""),

    frequency: 5 * 60 * 1000,
};
