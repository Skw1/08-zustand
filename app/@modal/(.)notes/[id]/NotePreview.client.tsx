'use client';

import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import css from './NotePreviewClient.module.css';
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage';
import Modal from '@/components/Modal/Modal';

export default function NotePreview({ id }: { id: string }) {
  const router = useRouter();
  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  const onClose = () => router.back();

  if (!id) {
    return (
      <Modal onClose={onClose}>
        <p className={css.message}>No note selected.</p>
        <button onClick={onClose} className={css.cancelButton}>
          Back
        </button>
      </Modal>
    );
  }

  if (isError) {
    return (
      <Modal onClose={onClose}>
        <ErrorMessage />
        <button onClick={onClose} className={css.cancelButton}>
          Back
        </button>
      </Modal>
    );
  }

  if (isLoading || !note) {
    return (
      <Modal onClose={onClose}>
        <div className={css.container} />
      </Modal>
    );
  }

  return (
    <Modal onClose={onClose}>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.content}>{note.content}</p>
          <p className={css.tag}>{note.tag}</p>
          <p className={css.date}>{note.createdAt}</p>
        </div>
      </div>
      <button onClick={onClose} type="button" className={css.cancelButton}>
        Back
      </button>
    </Modal>
  );
}
