import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import sharp from 'sharp';

import { env } from './src/env';

export default buildConfig({
  editor: lexicalEditor(),
  collections: [],
  secret: env.PAYLOAD_SECRET,
  db: postgresAdapter({
    pool: {
      connectionString: env.DATABASE_URI
    }
  }),
  sharp
});
