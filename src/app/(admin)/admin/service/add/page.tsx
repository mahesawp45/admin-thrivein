'use client';
import PrimaryButton from '@/components/button/PrimaryButton';
import InputText from '@/components/input/InputText';
import { createService } from '@/controllers/service_controller';
import Routes from '@/lib/routes';
import ThriveInServiceRequest from '@/services/models/request/service_request';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useMutation } from 'react-query';

const AddService = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<ThriveInServiceRequest>({
    category: '',
    description: '',
    icon_url: '',
    title: '',
    price: 0,
  });

  const { mutate } = useMutation(createService, {
    onSuccess: async (_) => {
      console.log('====================================');
      console.log('SUCESS CREATE SERVICE');
      console.log('====================================');
      router.replace(Routes.services);
    },
    onError: (error: any) => {
      console.log('====================================');
      console.log('ERROR CREATE SERVICE ---> ', error);
      console.log('====================================');
    },
  });

  return (
    <div>
      <div className="flex w-1/2 flex-col items-center justify-center rounded-lg bg-white shadow-sm">
        <p className="mb-10 text-xl font-bold">Add Service</p>

        <InputText
          value={formData.category}
          label="Category"
          classStyle="mb-4"
          onChange={(e) => {
            setFormData({ ...formData, category: e.target.value });
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
          value={formData.description}
          label="Description"
          classStyle="mb-4"
          onChange={(e) => {
            setFormData({ ...formData, description: e.target.value });
          }}
        />
        <InputText
          value={formData.icon_url}
          label="Icon Url"
          classStyle="mb-4"
          onChange={(e) => {
            setFormData({ ...formData, icon_url: e.target.value });
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

export default AddService;
