import Navbar from '@/components/organisms/Navbar';
import ChartSection from '@/components/organisms/ChartSection';
import Footer from '@/components/organisms/Footer';

export default function ChartPage() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-teal-500/30 selection:text-teal-200">
      <Navbar />
      <ChartSection />
      <Footer />
    </div>
  );
}

