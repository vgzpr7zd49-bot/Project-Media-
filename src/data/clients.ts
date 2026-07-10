
/**
 * CLIENT DATABASE - PROJECT MEDIA INC.
 * 
 * COMO ADICIONAR NOVO CLIENTE:
 * 1. Corre generateAccessKey() na consola do browser
 * 2. Guarda a KEY e dá ao cliente (nunca a guardes no código)
 * 3. Copia o HASH para o campo accessKeyHash do novo cliente
 * 4. Adiciona o objeto do cliente ao array clients[]
 * 5. O cliente usa a KEY para entrar — o sistema verifica o HASH
 */

export async function generateAccessKey(): Promise<{key: string, hash: string}> {
  const array = new Uint8Array(24);
  crypto.getRandomValues(array);
  const key = Array.from(array).map(b => b.toString(16).padStart(2,'0')).join('').toUpperCase();
  const msgBuffer = new TextEncoder().encode(key);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray.map(b => b.toString(16).padStart(2,'0')).join('');
  return { key, hash };
}

export interface PipelinePhase {
  name: string;
  status: 'completed' | 'in-progress' | 'pending';
  label: string;
}

export interface Deliverable {
  name: string;
  type: 'MP4' | 'ZIP' | 'PDF' | 'JPG';
  size: string;
  date: string;
  url: string;
  status: 'available' | 'preparing';
}

export interface Document {
  name: string;
  type: 'proposal' | 'meeting' | 'contract';
  date: string;
  url: string;
  duration?: string; // for meetings
  signed?: boolean; // for contracts
}

export interface Note {
  id: string;
  author: string;
  role: 'team' | 'client';
  timestamp: string;
  text: string;
}

export interface FeedItem {
  id: string;
  title: string;
  type: 'Article' | 'Video' | 'Analysis';
  thumbnail: string;
  description: string;
  url: string;
  isInternal?: boolean;
}

export interface ClientData {
  id: string;
  nomeCliente: string;
  nomeProjeto: string;
  accessKeyHash: string; // SHA-256
  accentColor: string; // Hex color
  pipeline: {
    currentPhase: string;
    progress: number;
    phases: PipelinePhase[];
    stills: string[];
    deliveryDate?: string;
  };
  deliverables: Deliverable[];
  documents: Document[];
  notes: Note[];
  feed: FeedItem[];
  isAdmin?: boolean;
  key?: string;
}

export const CLIENTS: ClientData[] = [
  {
    id: 'rental-client',
    nomeCliente: 'Client Rental',
    nomeProjeto: 'Aluguer de Equipamento',
    // Key: Projeto2026
    accessKeyHash: 'projeto-2026-hash-placeholder',
    key: 'Projeto2026',
    accentColor: '#C8A96E', // gold
    pipeline: {
      currentPhase: 'Catálogo Ativo',
      progress: 100,
      phases: [],
      stills: []
    },
    deliverables: [],
    documents: [],
    notes: [],
    feed: []
  },
  {
    id: 'admin',
    nomeCliente: 'Rafael · Project Media',
    nomeProjeto: 'Painel de Administração',
    // Key: PM-ADMIN-2024
    accessKeyHash: 'pm-admin-hash-placeholder', 
    key: 'PM-ADMIN-2024',
    accentColor: '#ff6a3d',
    pipeline: { currentPhase: '', progress: 0, phases: [], stills: [] },
    deliverables: [],
    documents: [],
    notes: [],
    feed: [],
    isAdmin: true
  },
  {
    id: 'c1',
    nomeCliente: 'Banda de Arnoso',
    nomeProjeto: 'Concerto de Ano Novo 2026',
    // Key: 12345678901234567890123456789012
    accessKeyHash: '961858852382e21255866186f8a49c402b932231f25b6a7828065406d042f9b2',
    key: '12345678901234567890123456789012',
    accentColor: '#eab308', // yellow-500
    pipeline: {
      currentPhase: 'Pós-Produção',
      progress: 67,
      phases: [
        { name: 'Briefing', status: 'completed', label: 'Definição de conceitos' },
        { name: 'Pré-produção', status: 'completed', label: 'Planeamento técnico' },
        { name: 'Captação', status: 'completed', label: 'Gravação ao vivo' },
        { name: 'Pós-produção', status: 'in-progress', label: 'Edição e Color Grading' },
        { name: 'Entrega', status: 'pending', label: 'Masterização final' }
      ],
      stills: [
        'https://images.unsplash.com/photo-1514525253361-bee8a197c0c5?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=1200'
      ]
    },
    deliverables: [
      { name: 'Teaser Redes Sociais', type: 'MP4', size: '450 MB', date: '2024-03-20', url: '#', status: 'available' },
      { name: 'Fotos Oficiais - Pack 01', type: 'ZIP', size: '1.2 GB', date: '2024-03-15', url: '#', status: 'available' },
      { name: 'Vídeo Completo (Draft)', type: 'MP4', size: '4.8 GB', date: '2024-04-01', url: '#', status: 'preparing' }
    ],
    documents: [
      { name: 'Proposta Comercial V2', type: 'proposal', date: '2023-11-10', url: '#' },
      { name: 'Contrato de Prestação de Serviços', type: 'contract', date: '2023-11-15', url: '#', signed: true },
      { name: 'Ata de Reunião - Kickoff', type: 'meeting', date: '2023-11-20', url: '#', duration: '15 min' }
    ],
    notes: [
      { id: 'n1', author: 'Project Media Team', role: 'team', timestamp: '2024-03-25 10:30', text: 'Olá! Já terminámos a primeira fase da edição. O teaser está disponível na tab de Entregas.' },
      { id: 'n2', author: 'Banda de Arnoso', role: 'client', timestamp: '2024-03-25 14:20', text: 'Excelente trabalho! Vamos rever e damos feedback em breve.' }
    ],
    feed: [
      { id: 'f1', title: 'Como Maximizar o Alcance do seu Concerto', type: 'Article', thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800', description: 'Dicas estratégicas para o lançamento do vídeo oficial.', url: '#' },
      { id: 'f2', title: 'Análise de Tendências Audiovisuais 2026', type: 'Analysis', thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800', description: 'O que o público procura em conteúdos culturais este ano.', url: '#' }
    ]
  },
  {
    id: 'maria-batizado-2024',
    nomeCliente: 'Maria Silva',
    nomeProjeto: 'Batizado da Maria',
    // Key: MARIA-BATIZADO-2024-KEY-PMI-1234
    accessKeyHash: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
    key: 'MARIA-BATIZADO-2024-KEY-PMI-1234',
    accentColor: '#ec4899', // pink-500
    pipeline: {
      currentPhase: 'Pré-produção',
      progress: 25,
      phases: [
        { name: 'Briefing', status: 'completed', label: 'Definição de estilo e locais' },
        { name: 'Pré-produção', status: 'in-progress', label: 'Planeamento da cobertura' },
        { name: 'Captação', status: 'pending', label: 'Dia do evento' },
        { name: 'Pós-produção', status: 'pending', label: 'Edição e Álbum' },
        { name: 'Entrega Final', status: 'pending', label: 'Entrega digital e física' }
      ],
      stills: []
    },
    deliverables: [],
    documents: [
      { name: 'Proposta_Batizado_Maria.pdf', type: 'proposal', date: '2024-04-01', url: '#' },
      { name: 'Contrato_PM_2024_Maria.pdf', type: 'contract', date: '2024-04-02', url: '#', signed: false }
    ],
    notes: [
      { id: 'n1', author: 'Rafael', role: 'team', timestamp: '2024-04-04 10:00', text: 'Bem-vindo ao portal Project Media. Aqui encontras toda a informação do teu projeto.' }
    ],
    feed: []
  },
  {
    id: 'demo-client',
    nomeCliente: 'Demo Client',
    nomeProjeto: 'Projeto de Demonstração 2024',
    // Key: PROJECTMEDIA-DEMO-2024-TEST-KEY-HERE
    accessKeyHash: '85bac1e933c3715f6dff3944e7044aedde6aa54b561807f5766d83b2c5c4077a',
    key: 'PROJECTMEDIA-DEMO-2024-TEST-KEY-HERE',
    accentColor: '#6366f1', // indigo-500
    pipeline: {
      currentPhase: 'Captação',
      progress: 45,
      phases: [
        { name: 'Briefing', status: 'completed', label: 'Alinhamento de expectativas' },
        { name: 'Pré-produção', status: 'completed', label: 'Logística e Equipamento' },
        { name: 'Captação', status: 'in-progress', label: 'Produção em curso' },
        { name: 'Pós-produção', status: 'pending', label: 'Edição Criativa' },
        { name: 'Entrega Final', status: 'pending', label: 'Masterização e Arquivo' }
      ],
      stills: [
        'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200',
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200'
      ]
    },
    deliverables: [
      { name: 'Moodboard Inicial', type: 'PDF', size: '12 MB', date: '2024-03-01', url: '#', status: 'available' },
      { name: 'Primeiros Brutos', type: 'ZIP', size: '4.2 GB', date: '2024-03-15', url: '#', status: 'preparing' }
    ],
    documents: [
      { name: 'Proposta_Demo_V1.pdf', type: 'proposal', date: '2024-02-15', url: '#' },
      { name: 'Contrato_Demo_Assinado.pdf', type: 'contract', date: '2024-02-20', url: '#', signed: true },
      { name: 'Ata_Reuniao_Kickoff.pdf', type: 'meeting', date: '2024-02-25', url: '#', duration: '45 min' }
    ],
    notes: [
      { id: 'n1', author: 'Rafael', role: 'team', timestamp: '2024-04-04 10:00', text: 'Bem-vindo ao portal Project Media. Aqui encontras toda a informação do teu projeto.' },
      { id: 'n2', author: 'Demo Client', role: 'client', timestamp: '2024-04-04 11:30', text: 'Obrigado! O portal parece excelente e muito intuitivo.' }
    ],
    feed: [
      { id: 'f1', title: 'Guia de Preparação para Gravação', type: 'Article', thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800', description: 'Como te preparares para o dia da captação.', url: '#' },
      { id: 'f2', title: 'O Impacto do Color Grading', type: 'Video', thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800', description: 'Vê como transformamos a imagem na pós-produção.', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
    ]
  },
  {
    id: 'casamento-casal-2025',
    nomeCliente: '[NOME DO CASAL]',
    nomeProjeto: 'Casamento [NOME CASAL]',
    accessKeyHash: '5a55afb9ceb45276159b5bd08d1b2f2270c0427780df09c74ace5ee28f5ee274',
    key: 'PM-41B166-A877F3-861ED4',
    isAdmin: false,
    accentColor: '#c9a84c',
 
    pipeline: {
      currentPhase: 'Proposta Enviada',
      progress: 5,
      deliveryDate: 'A definir',
      phases: [
        { name: 'Proposta',         label: 'Apresentação enviada ao casal',            status: 'in-progress' },
        { name: 'Contrato',         label: 'Assinatura e pagamento de sinal',           status: 'pending'     },
        { name: 'Pré-Produção',     label: 'Reunião de briefing e planeamento do dia',  status: 'pending'     },
        { name: 'Dia do Casamento', label: 'Captação fotografia e vídeo',               status: 'pending'     },
        { name: 'Pós-Produção',     label: 'Edição highlights + Same Day Edit',         status: 'pending'     },
        { name: 'Entrega Final',    label: 'Galeria online + vídeo final entregues',    status: 'pending'     },
      ],
      stills: []
    },
 
    deliverables: [],
 
    documents: [
      {
        name: 'Proposta de Casamento — Project Media',
        type: 'proposal',
        date: new Date().toLocaleDateString('pt-PT'),
        url: '/proposals/proposta-casamento-casal.html',
        signed: false,
      },
    ],
 
    notes: [
      {
        id: 'n1',
        author: 'Rafael',
        role: 'team',
        text: 'Bem-vindos ao vosso portal privado Project Media. Aqui podem acompanhar todas as etapas do vosso projeto, consultar a proposta e trocar mensagens connosco. Estamos muito felizes por poder fazer parte do vosso dia especial.',
        timestamp: new Date().toLocaleDateString('pt-PT', {
          day: '2-digit', month: 'short', year: 'numeric',
          hour: '2-digit', minute: '2-digit'
        }),
      },
    ],
 
    feed: [],
  }
];

export const getClientByKeyHash = (hash: string): ClientData | null => {
  // Special case for admin key hash placeholder
  if (hash === 'pm-admin-hash-placeholder') {
    return CLIENTS.find(c => c.id === 'admin') || null;
  }
  return CLIENTS.find(c => c.accessKeyHash === hash) || null;
};

export const getClientById = (id: string): ClientData | null => {
  return CLIENTS.find(c => c.id === id) || null;
};

