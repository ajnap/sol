// Soluna Marketing Site
import {
  Header,
  Hero,
  HowItWorks,
  Science,
  DeviceApp,
  Stats,
  Testimonials,
  FAQ,
  Footer,
} from './components';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <section id="science">
          <Science />
        </section>
        <DeviceApp />
        <Stats />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
