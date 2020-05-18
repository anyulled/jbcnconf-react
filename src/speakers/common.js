import axios from "axios";

const fetchSpeakers = async () => {
    const speakers = await axios.get("http://localhost:3001/speakers");
    return speakers.data.map(speaker => ({
        ...speaker,
        image: `https://www.jbcnconf.com/2020/${speaker.image}`
    }));
};

export default fetchSpeakers;