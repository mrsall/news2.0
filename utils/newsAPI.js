import axios from 'axios';

const API_URL = 'https://newsapi.org/v2/everything';
const API_KEY = process.env.NEWS_API_KEY;
const WEEK_AGO = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

export async function fetchWeeklyNews() {
  const categories = [
    { q: 'tech', label: 'Tech' },
    { q: 'jeux vidéo', label: 'Jeux Vidéo' },
    { q: 'anime', label: 'Anime' },
    { q: 'cinéma', label: 'Cinéma' }
  ];
  const all = await Promise.all(
    categories.map(cat =>
      axios.get(API_URL, {
        params: {
          q: cat.q,
          from: WEEK_AGO,
          language: 'fr',
          sortBy: 'relevancy',
          apiKey: API_KEY,
          pageSize: 10
        }
      }).then(res => ({ label: cat.label, articles: res.data.articles }))
    )
  );
  return all;
}

export function generateVideoIdea(article) {
  return `Créer une vidéo récap de l'actualité : **${article.title}**, expliquer son impact et donner ton avis.`;
}