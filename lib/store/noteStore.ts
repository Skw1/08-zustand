import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { NotePost } from '@/types/note';

type NoteDraftStore = {
  draft: NotePost;
  setDraft: (note: NotePost) => void;
  clearDraft: () => void;
};

const initialDraft: NotePost = {
  title: '',
  content: '',
  tag: 'Todo',
};

export const useNoteDraftStore = create<NoteDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) => set({ draft: note }),
      clearDraft: () => set({ draft: initialDraft }),
    }),
    {
      name: 'note-draft',
      partialize: (state) => ({ draft: state.draft }),
    }
  )
);
