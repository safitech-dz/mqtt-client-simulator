import dummyjson from "dummy-json";

export default {
    topic: `%u/%d/OWM/actualWeather`,
    fake: () =>
        dummyjson.parse(`{
            "humidity": {{float -100 100 '0.00'}},
            "pluviometry": {{float 0 100 '0.00'}},
            "pressure": {{float 800 1200 '0.00'}},
            "temperature": {{float 0 1000 '0.00'}}
          }`),
    frequency: 4 * 60 * 60 * 1000,
};
