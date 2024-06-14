'use client';
import PrimaryButton from '@/components/button/PrimaryButton';
import InputText from '@/components/input/InputText';
import { createArticle } from '@/controllers/article_controller';
import Routes from '@/lib/routes';
import ArticleRequest from '@/services/models/request/article_request';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';
import { useMutation } from 'react-query';

const AddCategoryService = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<ArticleRequest>({
    banner_url: '',
    title: '',
    content: '',
  });

  const { mutate } = useMutation(createArticle, {
    onSuccess: async (_) => {
      console.log('====================================');
      console.log('SUCESS CREATE BANNER');
      console.log('====================================');
      router.replace(Routes.articles);
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
        <p className="mb-10 text-xl font-bold">Add Article</p>
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
        <InputText
          value={formData.content}
          label="Content"
          classStyle="mb-4"
          onChange={(e) => {
            setFormData({ ...formData, content: e.target.value });
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
