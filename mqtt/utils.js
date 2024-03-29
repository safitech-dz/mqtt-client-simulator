import * as fs from "fs";

const formatConnectionOpts = (obj) => {
    return {
        protocol: obj.protocol,
        host: obj.host,
        port: obj.port,
        username: obj.username, // ! computer username
        password: obj.password,
        clientId: obj.clientId,
        clean: obj.clean.toLowerCase() === "true",
        keepalive: parseInt(obj.keepalive),
        reconnectPeriod: parseInt(obj.reconnectPeriod),
    };
};

/**
 * @returns {array}
 */
const parseTopicsDirectory = () => {
    const topicsDirectory = JSON.parse(
        fs.readFileSync("./topics_directory.json")
    );

    return topicsDirectory.map((entry) => {
        return {
            topic: entry.topic
                .replace("%u", process.env.MQTT_USERNAME)
                .replace("%d", process.env.MQTT_CLIENTID),
            opts: {
                qos: entry.qos,
                retain: entry.retain,
            },
            definition: {
                // frequencyEvent: entry["frequency_event"],
                // ! HACK
                frequencyEvent: 1000 * 60 * 5,
                type: entry.type,
                format: entry.format,
                faker: {
                    callback: null,
                    opts: null,
                },
            },
        };
    });
};

export { formatConnectionOpts, parseTopicsDirectory };
