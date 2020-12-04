
module.exports = {

    // database: 'SOA',
    // username: 'postgres',
    // password: 'chocobo14',
    // host: 'localhost',
    // dialect: 'postgres',
    // port: '5433',

    database: 'd5sjh95es23sj6',
    username: 'mxtplnkaxdsksg',
    password: 'ad34b374be0a67b8e9da24a964af329b076f765514358dbbf92248a02baa4abc',
    host: 'ec2-52-203-182-92.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: '5432',

    define: {
        timestamps: false,
    },
    logging: false,

    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}


/*
database : 'd5sjh95es23sj6',
username : 'mxtplnkaxdsksg',
password : 'ad34b374be0a67b8e9da24a964af329b076f765514358dbbf92248a02baa4abc',
host : 'ec2-52-203-182-92.compute-1.amazonaws.com',
dialect: 'postgres',
port: '5432',
ssh: true,
*/