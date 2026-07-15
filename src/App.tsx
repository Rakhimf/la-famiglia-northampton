import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Menu from '@/pages/Menu';
import Events from '@/pages/Events';
import ChristmasParty from '@/pages/ChristmasParty';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';
import BookNow from '@/pages/BookNow';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="events" element={<Events />} />
          <Route path="christmas-party" element={<ChristmasParty />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-now" element={<BookNow />} />
        </Route>
      </Routes>
    </Router>
  );
}
