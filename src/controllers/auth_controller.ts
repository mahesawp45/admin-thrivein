import LoginRequest from '@/services/models/request/login_request';
import AuthRepository from '@/services/repositories/auth/auth_repository';
import { AxiosError } from 'axios';

const auth_repository = new AuthRepository();

export const login = async (request: LoginRequest): Promise<Admin> => {
  const response = await auth_repository
    .login(request)
    .then(async (value) => {
      return value;
    })
    .catch((error: AxiosError) => {
      console.log('====================================');
      console.log('ERROR LOGIN ---> ', error.response);
      console.log('====================================');
      throw error.response;
    });

  return response;
};
