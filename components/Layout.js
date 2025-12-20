import Navbar from './Navbar';
import Meta from './Meta';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm']}
      minBreakpoint='sm'
    >
      <Meta />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
