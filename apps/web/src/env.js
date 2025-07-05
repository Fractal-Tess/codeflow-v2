import { createEnv } from '@t3-oss/env-next';

const env = createEnv({
  server: {
    DATABASE_URI: z.string().url(),
    PAYLOAD_SECRET: z.string()
  },

  client: {},

  runtimeEnv: {
    DATABASE_URI: process.env.DATABASE_URI,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET
  }
});

export { env };
