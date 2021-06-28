module.exports = {
    dialect: 'postgres',
    host: process.env.DATABASE_URL,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // ssl: true,
    // dialectOptions: {
    //     ssl: {
    //         required: true,
    //         rejectUnauthorized: false
    //     }
    // },
    define: {
        timestamps: true,
        underscored: true,
    }
};