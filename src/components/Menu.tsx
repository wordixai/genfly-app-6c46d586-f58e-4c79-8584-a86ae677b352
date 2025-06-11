const menuItems = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", price: "3.50", description: "Pure and intense" },
      { name: "Cappuccino", price: "4.50", description: "Classic Italian style" },
      { name: "Latte", price: "4.75", description: "Smooth and creamy" }
    ]
  },
  {
    category: "Pastries",
    items: [
      { name: "Croissant", price: "3.25", description: "Buttery and flaky" },
      { name: "Muffin", price: "3.00", description: "Freshly baked daily" }
    ]
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Menu</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {menuItems.map((section) => (
            <div key={section.category}>
              <h3 className="text-2xl font-semibold mb-6 text-amber-800">{section.category}</h3>
              <div className="space-y-6">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium">{item.name}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <span className="text-amber-700 font-medium">${item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;