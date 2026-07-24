export type UserRole = 'standard' | 'admin';

export type AuthState = {
    role: UserRole | null;
    storageStatePath: string;
};