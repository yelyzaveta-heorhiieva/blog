import { Suspense, lazy, useState } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { postsData } from './sources/posts';



const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const PostsPage = lazy(() => import('./pages/PostsPage/PostsPage'));
const PostDetailsPage = lazy(
  () => import('./pages/PostDetailsPage/PostDetailsPage'),
);
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));
const Insta = lazy(() => import('./components/Insta/Insta'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path='/' element={<HomePage posts={postsData} />} />
          <Route path='/posts' element={<PostsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/posts/:postId' element={<PostDetailsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      <Insta />
      <Footer/>
      </Suspense>
    </>
  );
}

export default App
