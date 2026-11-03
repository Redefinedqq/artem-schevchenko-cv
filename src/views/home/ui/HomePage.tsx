import { Navbar }     from '@/widgets/navbar';
import { Hero }       from '@/widgets/hero';
import { About }      from '@/widgets/about';
import { Experience } from '@/widgets/experience';
import { Stack }      from '@/widgets/stack';
import { Contact }    from '@/widgets/contact';

export function HomePage() {
  return (
    <main style={{ background: '#060606', minHeight: '100vh', position: 'relative' }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Stack />
      <Contact />
    </main>
  );
}
