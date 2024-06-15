'use client';
import { useServices } from '@/controllers/service_controller';
import Routes from '@/lib/routes';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

const DetailCategoryService = () => {
  const params = useParams<{ id: string }>();

  const router = useRouter();

  const { data } = useServices(params.id);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <p className="mb-10 text-start text-xl font-bold">
          Service {params.id}
        </p>
        <div className="my-6 flex w-full space-x-6">
          {data?.['list-services']?.map((service) => (
            <div
              onClick={() => {
                router.push(`${Routes.services}/${service.service_id}`);
              }}
              key={service.service_id}
              className={`cursor-pointer rounded-md bg-[#242DA8] px-10 py-4 shadow-lg`}
            >
              <p className="text-white">{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailCategoryService;
