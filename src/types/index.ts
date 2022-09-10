import { Paginated } from '@feathersjs/feathers';

export interface Navigation {
  navigation: {
    navigate(screen: string): void;
    goBack(): void;
  } 
}

interface Resource {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

export interface User extends Resource {
  email: string;
  password: string;
  roleId: string;
}

export interface File extends Resource {
  meta: {
    id: string;
    extension: string;
    filepath: string;
    size: number;
    type: string;
    duration?: string;
  };
  urls: {
    delivery: string;
    storage: string;
  };
}

export interface Article extends Resource {
  fileId: string;
  from: string;
  title: string;
  officialTitle: string;
  description: string;
  year: string;
  file?: File;
  imageFile: File;
  audioFile: File;
}

export interface PlaylistItem extends Resource {
  articleId: string;
  playlistId: string;
  userId: string;
  article?: Article;
}

export interface Playlist extends Resource {
  userId: string;
  name: string;
  playlistItems?: PlaylistItem[];
  count?: number;
}

export type Articles = Paginated<Article>;
export type Files = Paginated<Files>;
export type Users = Paginated<Users>;
export type Playlists = Paginated<Playlist>;
export type PlaylistItems = Paginated<PlaylistItems>;