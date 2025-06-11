import { Coffee } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 text-center text-white px-4">
        <div className="flex justify-center mb-6">
          <Coffee size={48} className="text-amber-400" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Artisan Coffee House</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Experience the perfect blend of tradition and innovation in every cup</p>
        <a href="#menu" className="inline-block bg-amber-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-amber-300 transition-colors">
          View Menu
        </a>
      </div>
    </div>
  );
};

export default Hero;