'use client';
import PrimaryButton from '@/components/button/PrimaryButton';
import InputText from '@/components/input/InputText';
import React from 'react';

const CategoryService = () => {
  return (
    <div>
      <div className="flex w-1/2 flex-col items-center justify-center rounded-lg bg-white shadow-sm">
        <p className="mb-10 text-xl font-bold">Add Category Service</p>
        <InputText value="" label="ID" classStyle="mb-4" />
        <InputText value="" label="Category" classStyle="mb-4" />
        <InputText value="" label="Title" classStyle="mb-4" />
        <InputText value="" label="Color" classStyle="mb-4" />
        <InputText value="" label="Description" classStyle="mb-4" />
        <InputText value="" label="Icon Url" classStyle="mb-4" />
        <PrimaryButton onSubmit={() => {}} title="Save" />
      </div>
    </div>
  );
};

export default CategoryService;
