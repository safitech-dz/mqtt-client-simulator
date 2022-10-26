export default {
    topic: `%u/%d/irrignnov_V1/state`,

    fake: () => (Math.random() < 0.5 ? "1" : "0"),

    frequency: 5 * 60 * 1000,
};
