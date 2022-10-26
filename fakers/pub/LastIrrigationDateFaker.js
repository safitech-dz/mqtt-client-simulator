export default {
    topic: `%u/%d/irrignnov_V1/last_irrigation_date`,

    fake: () =>
        new Date(new Date() - Math.random() * (4 * 60 * 60 * 1000))
            .toLocaleDateString("en-GB", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
            })
            .replace(/ /g, "/"),

    frequency: 5 * 60 * 1000,
};
