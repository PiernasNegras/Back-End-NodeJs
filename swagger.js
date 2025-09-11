import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'Mi API con NodeJS',
        description: 'Documentación generada automáticamente con Swagger',
        version: '1.0.0',
        contact: {
            name: 'Nahuel Martínez - GitHub',
            url: 'https://github.com/PiernasNegras'
        }
    },
    externalDocs: {
    description: 'LinkedIn Nahuel Martinez',
    url: 'https://www.linkedin.com/in/nahuel-martinez-7b898a218/'
    },
    host: process.env.HOST || 'localhost:3000',
    schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);
