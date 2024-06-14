'use client';
import React, { useState } from 'react';
import '../../globals.css';
import InputText from '@/components/input/InputText';
import PrimaryButton from '@/components/button/PrimaryButton';
import { useRouter } from 'next/navigation';
import LoginRequest from '@/services/models/request/login_request';
import { useMutation } from 'react-query';

import { login } from '@/controllers/auth_controller';

const Login = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<LoginRequest>({
    admin_name: '',
    password: '',
  });

  const { mutate: mutateLogin } = useMutation(login, {
    onSuccess: async (_) => {
      console.log('====================================');
      console.log('SUCESS');
      console.log('====================================');
      router.replace('/');
    },
    onError: (error: any) => {
      console.log('====================================');
      console.log('ERROR LOGIN ---> ', error);
      console.log('====================================');
    },
  });

  return (
    <div className="flex h-screen items-center justify-center bg-slate-100">
      <div className="flex w-1/4 flex-col items-center justify-center rounded-lg bg-white p-10 shadow-sm">
        <p className="mb-10 text-xl font-bold">Login Admin Thrive.In</p>
        <InputText
          value={formData.admin_name}
          label="Username"
          classStyle="mb-4"
          onChange={(e) => {
            setFormData({ ...formData, admin_name: e.target.value });
          }}
        />
        <InputText
          value={formData.password}
          label="Password"
          classStyle="mb-4"
          type="password"
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />
        <PrimaryButton
          onSubmit={() => {
            if (formData.admin_name && formData.password) {
              mutateLogin(formData);
            }
          }}
          title="Login"
        />
      </div>
    </div>
  );
};

export default Login;
