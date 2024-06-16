'use client';
import BasicButton from '@/components/button/BasicButton';
import { useHistoryOrder } from '@/controllers/history_order_controller';
import { useCategories } from '@/controllers/service_controller';
import Routes from '@/lib/routes';
import { useRouter } from 'next/navigation';
import React from 'react';

const CategoryService = () => {
  const router = useRouter();

  const { data } = useHistoryOrder();

  return (
    <div>
      <BasicButton
        onPress={() => {
          router.push(`${Routes.order}/add`);
        }}
        label="Add"
      />
      <div className="my-10 flex w-full space-x-6 pt-10">
        {data?.history_order?.map((history) => (
          <div
            onClick={() => {
              router.push(`${Routes.order}/${history.invoice}`);
            }}
            key={history.invoice}
            className={`cursor-pointer rounded-md bg-[#242DA8] px-10 py-4 shadow-lg`}
          >
            <p className="text-white">{history.invoice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryService;
