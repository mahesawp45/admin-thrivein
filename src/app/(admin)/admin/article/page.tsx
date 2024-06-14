'use client';
import BasicButton from '@/components/button/BasicButton';
import { useArticles } from '@/controllers/article_controller';
import Routes from '@/lib/routes';
import { useRouter } from 'next/navigation';
import React from 'react';

const Service = () => {
  const router = useRouter();

  const { data } = useArticles();

  return (
    <div>
      <BasicButton
        onPress={() => {
          router.push(`${Routes.articles}/add`);
        }}
        label="Add"
      />
      <div className="my-10 flex w-full space-x-6 pt-10">
        {data?.articles.map((article) => (
          <div
            onClick={() => {
              router.push(`${Routes.articles}/${article.articleId}`);
            }}
            key={article.articleId}
            className={`cursor-pointer rounded-md bg-[#242DA8] px-10 py-4 shadow-lg`}
          >
            <p className="text-white">{article.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
