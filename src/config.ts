
export default {
    SERVER_HOST: process.env.REACT_APP_SERVER_HOST || `http://localhost:${process.env.PORT}`,
    UI_HOST: process.env.REACT_APP_UI_HOST || `http://localhost:${process.env.PORT}`,
    USER_TOKEN_KEY: "USER_TOKEN",
    CLOUD_NAME: process.env.REACT_APP_CLOUD_NAME,
    DEV_MODE: (process.env.REACT_APP_MODE || "DEV") === "DEV"
}