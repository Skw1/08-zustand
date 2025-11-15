import axios from 'axios';
import type { Note, NotePost, NoteId } from '../types/note';

const BASE_URL = 'https://notehub-public.goit.study/api/notes';
const AUTH_HEADER = {
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
};

export interface NotesHttpResponse {
  notes: Note[];
  totalPages: number;
}

interface FetchNotesParams {
  search: string;
  page: number;
  perPage: number;
  tag?: string;
}

export const fetchNotes = async (
  query: string,
  page: number,
  tag?: string
): Promise<NotesHttpResponse> => {
  const params: FetchNotesParams = {
    search: query,
    page,
    perPage: 12,
  };

  if (tag) {
    params.tag = tag;
  }

  const { data } = await axios.get<NotesHttpResponse>(BASE_URL, {
    params,
    headers: AUTH_HEADER,
  });
  return data;
};

export const fetchNoteById = async (id: NoteId): Promise<Note> => {
  const { data } = await axios.get<Note>(`${BASE_URL}/${id}`, {
    headers: AUTH_HEADER,
  });
  return data;
};

export const createNote = async (note: NotePost): Promise<Note> => {
  const { data } = await axios.post<Note>(BASE_URL, note, {
    headers: AUTH_HEADER,
  });
  return data;
};

export const deleteNote = async (id: NoteId): Promise<Note> => {
  const { data } = await axios.delete<Note>(`${BASE_URL}/${id}`, {
    headers: AUTH_HEADER,
  });
  return data;
};
