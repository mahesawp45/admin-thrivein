'use client';
import BasicButton from '@/components/button/BasicButton';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type Category = {
  id: string;
  category: string;
  title: string;
  color: string;
  description: string;
  icon_url: string;
};

const CategoryService = () => {
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([
    {
      id: 'hs01',
      category: 'Online',
      title: 'Online Services',
      color: 'F46590',
      description: 'Online services',
      icon_url:
        'https://storage.googleapis.com/thrivein-asset/home_services/ic_online_solutions.png',
    },
    {
      id: 'hs02',
      category: 'Offline',
      title: 'Offline Services',
      color: 'F46590',
      description: 'Offline services',
      icon_url:
        'https://storage.googleapis.com/thrivein-asset/home_services/ic_online_solutions.png',
    },
  ]);

  return (
    <div>
      <BasicButton
        onPress={() => {
          router.push('/admin/category-service/add');
        }}
        label="Add"
      />
      <div className="my-10 flex w-full space-x-6 pt-10">
        {/* <p className="w-full text-center">No Data</p> */}
        {categories.map((category) => (
          <div
            key={category.id}
            className={`cursor-pointer rounded-md bg-[#242DA8] px-10 py-4 shadow-lg`}
          >
            <p className="text-white">{category.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryService;
