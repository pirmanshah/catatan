import { FiPlusCircle, FiBook, FiInbox } from 'react-icons/fi';

export const links = [
  {
    url: '/',
    description: 'Catatan',
    icon: <FiBook />
  },
  {
    url: '/archive',
    description: 'Arsip',
    icon: <FiInbox />
  },
  {
    url: '/new',
    description: 'Buat Catatan',
    icon: <FiPlusCircle />
  }
];
