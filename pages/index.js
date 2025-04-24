import React from 'react';
import ArticleCard from '../components/ArticleCard';
import VideoIdeaCard from '../components/VideoIdeaCard';

export default function Home({ news }) {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Actualités de la semaine</h1>
      {news.map(category => (
        <section key={category.label} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category.label}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.articles.map(article => (
              <ArticleCard key={article.url} article={article} />
            ))}
          </div>
        </section>
      ))}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Idées de vidéos</h2>
        {news.flatMap(cat => cat.articles).map(article => (
          <VideoIdeaCard key={article.url} idea={require('../utils/newsAPI').generateVideoIdea(article)} />
        ))}
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const news = await (await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`)).json();
  return { props: { news } };
}