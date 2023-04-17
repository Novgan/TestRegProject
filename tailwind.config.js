/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            textColor: {
                white: "#FFFFFF",
                black: "#000000",
                "red-100": "#E83E50",
            },
            height: {
                px: "1px",
            },
            colors: {
                brand: {
                    100: "#DCDEFC",
                    200: "#8892FF",
                    300: "#6D6BE5",
                    400: "#4E5AF2",
                    500: "#3843ED",
                    600: "#5E6BF6",
                },
                error: {
                    100: "#FF776F",
                },
                light: {
                    100: "#CBD5E2",
                    200: "#DCDEFC",
                },
            },
        },
    },
    plugins: [],
};
