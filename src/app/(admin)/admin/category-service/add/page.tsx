'use client';
import PrimaryButton from '@/components/button/PrimaryButton';
import InputText from '@/components/input/InputText';
import { createCategory } from '@/controllers/service_controller';
import Routes from '@/lib/routes';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useMutation } from 'react-query';

const AddCategoryService = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<CategoryRequest>({
    category: '',
    color: '',
    discription: '',
    icon_url: '',
    id: 0,
    title: '',
  });

  const { mutate } = useMutation(createCategory, {
    onSuccess: async (_) => {
      console.log('====================================');
      console.log('SUCESS CREATE CATEGORY');
      console.log('====================================');
      router.replace(Routes.categories);
    },
    onError: (error: any) => {
      console.log('====================================');
      console.log('ERROR CREATE CATEGORY ---> ', error);
      console.log('====================================');
    },
  });

  return (
    <div>
      <div className="flex w-1/2 flex-col items-center justify-center rounded-lg bg-white shadow-sm">
        <p className="mb-10 text-xl font-bold">Add Category Service</p>
        <InputText
          value={formData.id?.toString() ?? ''}
          label="ID"
          classStyle="mb-4"
          onChange={(e) => {
            setFormData({ ...formData, id: parseInt(e.target.value) });
          }}
        />
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
          value={formData.color}
          label="Color"
          classStyle="mb-4"
          onChange={(e) => {
            setFormData({ ...formData, color: e.target.value });
          }}
        />
        <InputText
          value={formData.discription}
          label="Description"
          classStyle="mb-4"
          onChange={(e) => {
            setFormData({ ...formData, discription: e.target.value });
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

export default AddCategoryService;
