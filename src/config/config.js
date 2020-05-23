export default {
    isDev: process.env.NODE_ENV === 'development' || !process.env.NODE_ENV,
    isProd: process.env.NODE_ENV === 'production',
    isStaging: process.env.NODE_ENV === 'staging',
    api: {
        basePath: 'http://localhost:5001/api/',
        limit: 10,
    },
}
