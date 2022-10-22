import * as config from "./config.js";

import * as mqtt from "mqtt";

import fakers from "./fakers/fakers.js";
import * as mqttUtils from "./mqtt/utils.js";
import * as mqttLogger from "./mqtt/logger.js";

const client = mqtt.connect(mqttUtils.formatConnectionOpts(config.mqtt));

console.log(client.options);

client.on("connect", () => {
    mqttLogger.connect();

    publishOnInterval(
        client,
        "simulator/simulator/OWM/actualWeather",
        fakers.actualWeather.make,
        5 * 60 * 60 * 1000
    );
});

client.on("message", function (topic, message) {
    // message is Buffer
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

function publishOnInterval(client, topic, msg, interval) {
    client.publish(topic, msg());
    return setInterval(() => {
        client.publish(topic, msg());
    }, interval);
}
