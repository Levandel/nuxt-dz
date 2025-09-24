import type {UserData} from './user.interface';

export interface AuthResponse {
  token: string;
  user: UserData;
}
