import axios from "axios";

export const limsClient = axios.create({
    // baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        Accept: "application/json",
    },
});
