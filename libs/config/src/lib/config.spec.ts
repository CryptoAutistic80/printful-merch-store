import { loadEnvConfig } from './config';

describe('config loader', () => {
  it('falls back to sane defaults', () => {
    const env = loadEnvConfig({ NODE_ENV: 'development' });
    expect(env.PORT).toBe(3333);
  });
});
