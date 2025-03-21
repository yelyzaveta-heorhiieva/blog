import { Suspense, lazy, useState } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';



const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const PostsPage = lazy(() => import('./pages/PostsPage/PostsPage'));
const PostDetailsPage = lazy(
  () => import('./pages/PostDetailsPage/PostDetailsPage'),
);
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));

function App() {

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/posts' element={<PostsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/posts/:postId' element={<PostDetailsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App
