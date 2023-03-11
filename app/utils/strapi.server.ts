import { GraphQLClient } from 'graphql-request'
import { getSdk } from '~/graphql/strapi/types';

const client = new GraphQLClient(process.env.STRAPI_URL_BASE + '/content-api', {
    headers: {
      authorization: 'Bearer ' + process.env.STRAPI_API_TOKEN,
    },
})

export const strapi = getSdk(client);