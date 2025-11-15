import type { Metadata } from "next";
import css from './not-found.module.css';

export const metadata: Metadata = {
  title: "Page not found — 404",
  description:
    "Сторінка не знайдена. Такої сторінки не існує або вона була видалена.",
  openGraph: {
    title: "Page not found — 404",
    description:
      "Сторінка не знайдена. Такої сторінки не існує або вона була видалена.",
    url: "https://notehub-app.example.com/404",
    images: [
      "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
    ],
  },
};

const NotFound = () => {
  return (
    <div>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
