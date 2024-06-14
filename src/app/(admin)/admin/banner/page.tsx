'use client';
import BasicButton from '@/components/button/BasicButton';
import { useBanners } from '@/controllers/banner_controller';
import Routes from '@/lib/routes';
import { useRouter } from 'next/navigation';
import React from 'react';

const Service = () => {
  const router = useRouter();

  const { data } = useBanners();

  return (
    <div>
      <BasicButton
        onPress={() => {
          router.push(`${Routes.banners}/add`);
        }}
        label="Add"
      />
      <div className="my-10 flex w-full space-x-6 pt-10">
        {data?.map((banner) => (
          <div
            onClick={() => {
              router.push(`${Routes.banners}/${banner.id}`);
            }}
            key={banner.id}
            className={`cursor-pointer rounded-md bg-[#242DA8] px-10 py-4 shadow-lg`}
          >
            <p className="text-white">{banner.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
