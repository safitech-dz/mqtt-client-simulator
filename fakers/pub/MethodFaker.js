export default {
    topic: `%u/%d/irrignnov_V1/method`,

    fake: () => {
        let arr = [0, 1, 2];
        return `${arr[Math.floor(Math.random() * arr.length)]}`;
    },

    frequency: 5 * 60 * 1000,
};
