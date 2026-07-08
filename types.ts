
export type ProjectType = 'Feature' | 'Documentary' | 'Strategic Campaign' | 'Political' | 'Commercial' | 'Photography' | 'Short Film';

export interface Project {
  id: string;
  title: string;
  slug: string;
  year: string;
  type: ProjectType;
  synopsis: string;
  coverImage: string;
  stills: string[];
  videoUrl?: string;
  albumUrl?: string;
  role: string;
  isFeatured?: boolean;
}

export interface Capacity {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface PipelinePhase {
  name: string;
  label: string;
  status: 'completed' | 'in-progress' | 'pending';
}

export interface Pipeline {
  currentPhase: string;
  progress: number;
  deliveryDate?: string;
  phases?: PipelinePhase[];
}

export interface Deliverable {
  name: string;
  type: string;
  size: string;
  date: string;
  url: string;
  status: 'available' | 'pending';
  thumbnail?: string;
}

export interface Document {
  name: string;
  type: 'proposal' | 'contract' | 'meeting';
  date?: string;
  url?: string;
  signed?: boolean;
}

export interface Note {
  author: string;
  text: string;
  timestamp: string;
}

export interface FeedItem {
  title: string;
  type: 'Video' | 'PDF' | 'Link';
  thumbnail: string;
  url?: string;
}

export interface ClientData {
  id: string;
  nomeCliente: string;
  nomeProjeto: string;
  key?: string;
  isAdmin: boolean;
  accentColor: string;
  pipeline: Pipeline;
  deliverables: Deliverable[];
  documents: Document[];
  notes: Note[];
  feed?: FeedItem[];
}
