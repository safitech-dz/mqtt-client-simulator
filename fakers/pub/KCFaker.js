export default {
    topic: `%u/%d/actuator/irrignnov_V1/kc`,

    fake: () => `${Math.floor(Math.random() * 200) / 100}`,

    frequency: 5 * 60 * 1000,
};
