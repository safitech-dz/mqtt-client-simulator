import dummyjson from "dummy-json";

export default class {
    constructor(frequency = 4 * 60 * 60 * 1000) {
        this.frequency = frequency;

        // TODO: add specs
    }

    make() {
        return dummyjson.parse(`{
  "humidity": {{float -100 100 '0,00'}},
  "pluviometry": {{float 0 100 '0,00'}},
  "pressure": {{float 800 1200 '0,00'}},
  "temperature": {{float 0 1000 '0,00'}}
}`);
    }
}
