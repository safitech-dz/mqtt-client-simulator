import ActualWeatherFaker from "./pub/ActualWeatherFaker.js";
import DailyWeatherFaker from "./pub/DailyWeatherFaker.js";
import DripFaker from "./pub/DripFaker.js";
import KCFaker from "./pub/KCFaker.js";
import LastIrrigationDateFaker from "./pub/LastIrrigationDateFaker.js";
import MethodFaker from "./pub/MethodFaker.js";
import SprinklerFaker from "./pub/SprinklerFaker.js";
import StateFaker from "./pub/StateFaker.js";

export default [
    ActualWeatherFaker,
    DailyWeatherFaker,
    StateFaker,
    LastIrrigationDateFaker,
    // {
    //     topic: `%u/%d/irrignnov_V1/last_irrigation_begin`,
    //     fake: null,
    // },
    // {
    //     topic: `%u/%d/irrignnov_V1/last_irrigation_end`,
    //     fake: null,
    // },
    MethodFaker,
    KCFaker,
    DripFaker,
    SprinklerFaker,
    // {
    //     topic: `%u/%d/irrignnov_V1/time`,
    //     fake: null,
    // },
    // {
    //     topic: `%u/%d/irrignnov_V1/frequence`,
    //     fake: null,
    // },
    // {
    //     topic: `%u/%d/crop`,
    //     fake: null,
    // },
    // {
    //     topic: `%u/%d/position`,
    //     fake: null,
    // },
    // {
    //     topic: `%u/%d/area`,
    //     fake: null,
    // },
    // {
    //     topic: `%u/%d/irrignnov_V1/etm`,
    //     fake: null,
    // },
    // {
    //     topic: `%u/%d/irrignnov_V1/prediction`,
    //     fake: null,
    // },
];
