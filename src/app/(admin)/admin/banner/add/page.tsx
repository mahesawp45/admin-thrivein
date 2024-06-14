'use client';
import PrimaryButton from '@/components/button/PrimaryButton';
import InputText from '@/components/input/InputText';
import { createBanner } from '@/controllers/banner_controller';
import Routes from '@/lib/routes';
import BannerRequest from '@/services/models/request/banner_request';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';
import { useMutation } from 'react-query';

const AddCategoryService = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<BannerRequest>({
    banner_txt: '',
    banner_url: '',
    title: '',
  });

  const { mutate } = useMutation(createBanner, {
    onSuccess: async (_) => {
      console.log('====================================');
      console.log('SUCESS CREATE BANNER');
      console.log('====================================');
      router.replace(Routes.banners);
    },
    onError: (error: any) => {
      console.log('====================================');
      console.log('ERROR CREATE BANNER ---> ', error);
      console.log('====================================');
    },
  });

  return (
    <div>
      <div className="flex w-1/2 flex-col items-center justify-center rounded-lg bg-white shadow-sm">
        <p className="mb-10 text-xl font-bold">Add Banner</p>
        <InputText
          value={formData.banner_txt}
          label="Banner Text"
          classStyle="mb-4"
          onChange={(e) => {
            setFormData({ ...formData, banner_txt: e.target.value });
          }}
        />
        <InputText
          value={formData.title}
          label="Title"
          classStyle="mb-4"
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
          }}
        />
        <InputText
          value={formData.banner_url}
          label="Banner URL"
          classStyle="mb-4"
          onChange={(e) => {
            setFormData({ ...formData, banner_url: e.target.value });
          }}
        />
        <PrimaryButton
          onSubmit={() => {
            mutate(formData);
          }}
          title="Save"
        />
      </div>
    </div>
  );
};

export default AddCategoryService;
