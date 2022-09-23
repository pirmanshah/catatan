import { Route, Routes } from 'react-router-dom';
import PageHeader from './components/PageHeader';
import AddNotePage from './pages/AddNotePage';
import ArchivePageWrapper from './pages/ArchivePage';
import EditNotePageWrapper from './pages/EditNotePage';
import HomePageWrapper from './pages/HomePage';
import NoteDetailPage from './pages/NoteDetailPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <section className='App'>
      <PageHeader />
      <Routes>
        <Route path='/' element={<HomePageWrapper />} />
        <Route path='/archive' element={<ArchivePageWrapper />} />
        <Route path='/new' element={<AddNotePage />} />
        <Route path='/notes/:id' element={<NoteDetailPage />} />
        <Route path='/edit/:id' element={<EditNotePageWrapper />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </section>
  );
};

export default App;
