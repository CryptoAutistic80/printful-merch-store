import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3333),
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),
  PRINTFUL_API_TOKEN: z.string().optional(),
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
  } as const;
}
