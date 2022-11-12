export default () => {
    const date = new Date(new Date() - Math.random() * (12 * 60 * 60 * 1000));

    let hours = date.getHours() + "";
    let minutes = date.getMinutes() + "";

    hours = hours.length === 1 ? "0" + hours : hours;
    minutes = minutes.length === 1 ? "0" + minutes : minutes;

    return `${hours}:${minutes}`;
};

// TODO: consider the format in the rule
