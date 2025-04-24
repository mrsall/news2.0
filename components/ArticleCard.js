import React from 'react';

export default function ArticleCard({ article }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{new Date(article.publishedAt).toLocaleDateString('fr-FR')}</p>
      <p className="text-base mb-2">{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
        Lire la suite
      </a>
    </div>
  );
}