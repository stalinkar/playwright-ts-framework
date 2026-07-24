import path from 'path';
import { apiLogIn } from '../api/auth.api';
import { testDataManager } from '../resources/testDataManager';
import { UserRole } from './auth.types';

export async function createAuthStateForRole(role: UserRole) {
  const user = testDataManager.getUser(
    role === 'admin' ? 'adminUsers' : 'standardUsers'
  );

  const storagePath = path.resolve(`storage/${role}User.json`);

//   await apiLogIn(user.username, user.password, storagePath);
  await apiLogIn("test.user@dummy.com", "Abcd@123", storagePath);
}