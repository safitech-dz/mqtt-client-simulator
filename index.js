import * as config from "./config.js";

import * as mqtt from "mqtt";

import fakers from "./fakers/fakers.js";
import * as mqttUtils from "./mqtt/utils.js";
import * as mqttLogger from "./mqtt/logger.js";

const topics = mqttUtils.parseTopicsDirectory();

console.dir(topics, { depth: null });

const client = mqtt.connect(mqttUtils.formatConnectionOpts(config.mqtt));

console.log(client.options);

client.on("connect", () => {
    mqttLogger.connect();

    fakers.forEach((topic) => {
        publishOnInterval(
            client,
            topic.topic
                .replace("%u", config.mqtt.username)
                .replace("%d", config.mqtt.clientId),
            topic.fake,
            topic.frequency
        );
    });
});

client.on("message", function (topic, message) {
    console.log(message.toString());
    // ...
});

// client.on("packetsend", mqttLogger.packetsend);
// client.on("packetreceive", mqttLogger.packetreceive);
client.on("reconnect", mqttLogger.reconnect);
client.on("close", mqttLogger.close);
client.on("offline", mqttLogger.offline);
client.on("end", mqttLogger.end);
client.on("error", mqttLogger.error);

/**
 *
 * @param {mqtt.MqttClient} client
 * @param {string} topic
 * @param {string} msg
 * @param {int} interval
 * @returns
 */
function publishOnInterval(client, topic, msg, interval) {
    client.publish(topic, msg());
    return setInterval(() => {
        client.publish(topic, msg());
    }, interval);
}
