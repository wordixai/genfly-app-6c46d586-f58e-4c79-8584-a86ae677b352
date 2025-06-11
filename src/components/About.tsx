const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80"
              alt="Cafe interior"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2010, our cafe has been serving premium coffee and creating memorable experiences for our community. We source our beans directly from sustainable farms and roast them in-house to ensure the highest quality in every cup.
            </p>
            <p className="text-gray-600">
              Our passionate baristas are dedicated to the craft of coffee-making, combining traditional methods with modern techniques to bring you the perfect brew every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;