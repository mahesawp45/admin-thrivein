'use client';
import React from 'react';
import '../../globals.css';
import InputText from '@/components/input/InputText';
import PrimaryButton from '@/components/button/PrimaryButton';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen items-center justify-center bg-slate-100">
      <div className="flex w-1/4 flex-col items-center justify-center rounded-lg bg-white p-10 shadow-sm">
        <p className="mb-10 text-xl font-bold">Login Admin Thrive.In</p>
        <InputText value="" label="Username" classStyle="mb-4" />
        <InputText value="" label="Password" classStyle="mb-4" />
        <PrimaryButton
          onSubmit={() => {
            router.push('admin');
          }}
          title="Login"
        />
      </div>
    </div>
  );
};

export default Login;
