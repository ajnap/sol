// Soluna Marketing Site
import {
  Header,
  Hero,
  Problem,
  Opportunity,
  Solution,
  Mindset,
  Traction,
  FAQ,
  Footer,
  ScrollProgress,
} from './components';

function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Opportunity />
        <Solution />
        <Mindset />
        <Traction />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
