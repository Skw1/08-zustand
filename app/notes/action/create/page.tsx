import NoteForm from '@/components/NoteForm/NoteForm';
import css from './CreateNotePage.module.css';

export const metadata = {
  title: 'Create note | NoteHub',
  description: 'Create a new note in NoteHub app.',
  openGraph: {
    title: 'Create note | NoteHub',
    description: 'Create a new note in NoteHub app.',
    url: 'https://notehub.com',
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
