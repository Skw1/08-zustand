import { fetchNotes } from "@/lib/api";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import NotesClient from "./Notes.client";

export default async function NotesPage(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await props.params;

  const tag = slug?.[0] === "all" ? "" : slug?.[0] ?? "";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, "", tag],
    queryFn: () => fetchNotes("", 1, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
