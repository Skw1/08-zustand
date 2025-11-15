import { fetchNotes } from '@/lib/api';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import NotesClient from './Notes.client';

export async function generateMetadata(props: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await props.params;
  const filter = slug?.[0] ?? 'all';
  const readableFilter =
    filter === 'all' ? 'All notes' : filter.charAt(0).toUpperCase() + filter.slice(1);

  return {
    title: `${readableFilter} | NoteHub`,
    description: `Notes filtered by: ${readableFilter}. View notes by selected category.`,
    openGraph: {
      title: `${readableFilter} | NoteHub`,
      description: `Notes filtered by: ${readableFilter}. View notes by selected category.`,
      url: `https://notehub.com/notes/filter/${filter}`,
      images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
    },
  };
}

export default async function NotesPage(props: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await props.params;
  const tag = slug?.[0] === 'all' ? '' : slug?.[0] ?? '';

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, '', tag],
    queryFn: () => fetchNotes('', 1, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
