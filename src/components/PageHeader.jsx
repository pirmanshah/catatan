import Navigation from './navigation/Navigation';

const PageHeader = () => {
  return (
    <header className='header'>
      <h1>Aplikasi Catatan</h1>
      <p>Aplikasi sederhana, memberikan anda pengalaman membuat catatan yang cepat dan mudah.</p>
      <Navigation />
      <hr />
    </header>
  );
};

export default PageHeader;
