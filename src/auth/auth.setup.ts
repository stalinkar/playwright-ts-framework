import { FullConfig } from '@playwright/test';
import { createAuthStateForRole } from './auth.helper';

async function globalAuthSetup(config: FullConfig) {
  // Generate all required roles here
  await createAuthStateForRole('standard');
  await createAuthStateForRole('admin');
}

export default globalAuthSetup;