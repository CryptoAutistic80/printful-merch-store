import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3333),
  STORE_URL: z.string().default('https://store.groupseven.life'),
  APP_BASE_URL: z.string().default('http://localhost:4200'),
  API_BASE_URL: z.string().default('http://localhost:3333/api'),
});

export type AppEnvConfig = z.infer<typeof envSchema>;

export function loadEnvConfig(values: NodeJS.ProcessEnv = process.env): AppEnvConfig {
  return envSchema.parse(values);
}

export function getPublicRuntimeConfig(env: AppEnvConfig) {
  return {
    NEXT_PUBLIC_API_BASE_URL: env.API_BASE_URL,
    NEXT_PUBLIC_STORE_URL: env.STORE_URL,
  } as const;
}
