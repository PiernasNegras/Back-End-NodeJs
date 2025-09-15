import swaggerJSDoc from 'swagger-jsdoc';

const isProduction = process.env.NODE_ENV === 'production';
const serverUrl = isProduction
  ? 'https://back-end-node-js.vercel.app'
  : 'http://localhost:3000';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Mi API con NodeJS',
    version: '1.0.0',
    description: 'Documentación generada automáticamente con Swagger',
    contact: {
      name: 'Nahuel Martínez - GitHub',
      url: 'https://github.com/PiernasNegras'
    }
  },
  servers: [
    {
      url: serverUrl
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  externalDocs: {
    description: 'LinkedIn Nahuel Martinez',
    url: 'https://www.linkedin.com/in/nahuel-martinez-7b898a218/'
  }
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
