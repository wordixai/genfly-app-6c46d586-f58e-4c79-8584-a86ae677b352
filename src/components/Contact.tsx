import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Visit Us</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <MapPin size={24} className="text-amber-700" />
            </div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-gray-600">123 Coffee Street<br />City, State 12345</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Phone size={24} className="text-amber-700" />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">(555) 123-4567</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Mail size={24} className="text-amber-700" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600">hello@artisancoffee.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;