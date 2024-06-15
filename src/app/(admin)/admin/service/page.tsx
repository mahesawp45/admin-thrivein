'use client';
import BasicButton from '@/components/button/BasicButton';
import { useCategories } from '@/controllers/service_controller';
import Routes from '@/lib/routes';
import { useRouter } from 'next/navigation';
import React from 'react';

const Service = () => {
  const router = useRouter();

  const { data } = useCategories();

  return (
    <div>
      <BasicButton
        onPress={() => {
          router.push(`${Routes.services}/add`);
        }}
        label="Add"
      />
      <div className="my-10 flex w-full space-x-6 pt-10">
        {data?.services?.map((category) => (
          <div
            onClick={() => {
              router.push(`${Routes.services}/${category.category}`);
            }}
            key={category.id}
            style={{ backgroundColor: `#${category.color}` }}
            className={`cursor-pointer rounded-md px-10 py-4 shadow-lg`}
          >
            <p className="text-white">{category.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
