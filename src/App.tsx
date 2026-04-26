import { Outlet, ScrollRestoration } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-amber focus:px-3 focus:py-2 focus:text-cream"
      >
        Skip to main content
      </a>
      <div className="relative min-h-screen overflow-x-hidden">
        <div className="paper-grain pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <Nav />
        <main id="main">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ScrollRestoration />
    </>
  );
}
