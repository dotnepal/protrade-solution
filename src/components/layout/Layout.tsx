import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import SkipToContentLink from './SkipToContentLink';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <SkipToContentLink />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
