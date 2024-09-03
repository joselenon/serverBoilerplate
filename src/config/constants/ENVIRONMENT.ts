import dotenv from 'dotenv';
import path from 'path';
import { EnvVariablesMissingError } from '../errors/classes/SystemErrors';

const envPath = path.resolve(__dirname, '../../../.env');
dotenv.config({ path: envPath });

const ENVIRONMENT = {
  MODE: process.env.MODE as 'DEVELOPMENT' | 'PRODUCTION',
  HTTPS: process.env.HTTPS === 'true' ? true : false,

  DOMAIN: process.env.DOMAIN as string,

  SERVER_SUBDOMAIN_DOMAIN: process.env.SERVER_SUBDOMAIN_DOMAIN,
  SERVER_PORT: (process.env.SERVER_PORT || 4000) as number,

  CLIENT_SUBDOMAIN_DOMAIN: process.env.CLIENT_SUBDOMAIN_DOMAIN,
  CLIENT_PORT: (process.env.CLIENT_PORT || 3000) as number,

  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID as string,
  FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY as string,
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL as string,

  SESSION_SECRET: process.env.SESSION_SECRET as string,
  JWT_SECRET: process.env.JWT_SECRET as string,
};

const requiredVariables = [
  'MODE',
  'HTTPS',
  'DOMAIN',
  'SERVER_SUBDOMAIN_DOMAIN',
  'SERVER_PORT',
  'CLIENT_SUBDOMAIN_DOMAIN',
  'FIREBASE_PROJECT_ID',
  'FIREBASE_PRIVATE_KEY',
  'FIREBASE_CLIENT_EMAIL',
];

const missingVariables = requiredVariables.filter((variable) => !process.env[variable]);

if (missingVariables.length > 0) {
  throw new EnvVariablesMissingError(missingVariables);
}

export default ENVIRONMENT;
