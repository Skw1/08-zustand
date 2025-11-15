"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchNoteById } from "../../../lib/api";
import type { Note } from "../../../types/note";

import css from "./NoteDetails.module.css";

interface Props {
  noteId?: string;
}

export default function NoteDetailsClient({ noteId }: Props) {
  const params = useParams();
  const id = noteId ?? params?.id;

  const { data: note, isLoading, error } = useQuery<Note, Error>({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id as string),
    enabled: !!id,
    refetchOnMount: false,
  });

  if (!id) return <p>No note selected.</p>;
  if (isLoading) return <p>Loading, please wait...</p>;
  if (error || !note) return <p>Something went wrong.</p>;

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{note.createdAt}</p>
      </div>
    </div>
  );
}