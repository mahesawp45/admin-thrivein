import { api } from '@/services/config/api';
import LoginRequest from '@/services/models/request/login_request';
import { setCookie } from 'cookies-next';

class AuthRepository {
  login_endpoint = 'login-admin';

  async login(request: LoginRequest): Promise<Admin> {
    try {
      const response = await api.post(this.login_endpoint, request);

      setCookie('access_token', response.data.token, {
        maxAge: 900,
      });
      setCookie('isLoggedin', true);

      return response.data;
    } catch (error) {
      console.log('====================================');
      console.log('ERROR LOGIN ---> ', error);
      console.log('====================================');
      throw error;
    }
  }
}

export default AuthRepository;
