import NoteForm from '@/components/NoteForm/NoteForm';
import css from './CreateNotePage.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create note | NoteHub',
  description: 'Create a new note in NoteHub app.',
  openGraph: {
    title: 'Create note | NoteHub',
    description: 'Create a new note in NoteHub app.',
    url: 'https://notehub.com/notes/action/create',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Create note | NoteHub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Create note | NoteHub',
    description: 'Create a new note in NoteHub app.',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
  },
};

export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
