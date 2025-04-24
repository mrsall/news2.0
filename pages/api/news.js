import { fetchWeeklyNews } from '../../utils/newsAPI';

export default async function handler(req, res) {
  try {
    const data = await fetchWeeklyNews();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des actualités.' });
  }
}