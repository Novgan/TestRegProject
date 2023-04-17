import axios from "axios";

export const client = axios.create({
    baseURL: "https://api.prof.world/v2.0/",
    headers: {
        Accept: "application/json",
    },
});
