'use client';
import BasicButton from '@/components/button/BasicButton';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type ServiceThriveIn = {
  service_id: string;
  category: string;
  title: string;
  description: string;
  price: number;
  icon_url: string;
};

const Service = () => {
  const router = useRouter();

  const [services, setServices] = useState<ServiceThriveIn[]>([
    {
      service_id: 'hs01',
      category: 'Online',
      title: 'Paket Offline-SM',
      price: 429900,
      description: 'Online services',
      icon_url:
        'https://storage.googleapis.com/thrivein-asset/offline_services/paketOfflineLG.png',
    },
  ]);

  return (
    <div>
      <BasicButton
        onPress={() => {
          router.push('/admin/service/add');
        }}
        label="Add"
      />
      <div className="my-10 flex w-full space-x-6 pt-10">
        {/* <p className="w-full text-center">No Data</p> */}
        {services.map((service) => (
          <div
            onClick={() => {
              router.push(`/admin/service/${service.service_id}`);
            }}
            key={service.service_id}
            className={`cursor-pointer rounded-md bg-[#242DA8] px-10 py-4 shadow-lg`}
          >
            <p className="text-white">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
