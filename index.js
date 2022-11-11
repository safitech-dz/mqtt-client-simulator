import * as config from "./config.js";

import * as mqtt from "mqtt";

import setFaker from "./fakers/faker.js";
import * as mqttUtils from "./mqtt/utils.js";
import * as mqttLogger from "./mqtt/logger.js";

const topics = mqttUtils.parseTopicsDirectory();

topics.forEach(setFaker);

console.dir(topics, { depth: null });

const client = mqtt.connect(mqttUtils.formatConnectionOpts(config.mqtt));

console.log(client.options);

client.on("connect", () => {
    mqttLogger.connect();

    topics.forEach((topic) => {
        if (!topic.definition.faker.callback) {
            // ! HACK
            return;
        }

        console.log(topic.definition.faker);

        publishOnInterval(
            client,
            topic.topic,
            topic.definition.faker,
            topic.opts,
            topic.definition.frequencyEvent
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
 * @param {obj} msg
 * @param {obj|null} opts
 * @param {int} interval
 * @returns
 */
function publishOnInterval(client, topic, msg, opts, interval) {
    client.publish(topic, msg.callback(msg.opts).toString(), opts);

    return setInterval(() => {
        client.publish(topic, msg.callback(msg.opts).toString(), opts);
    }, interval);
}
