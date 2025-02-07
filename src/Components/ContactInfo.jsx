import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div id="contact" className="bg-gray-100 p-6 shadow-lg max-w-full mx-auto">
        <h2 className="text-4xl text-center py-3 font-bold text-gray-800">Contact Information</h2>
      <div className="flex items-center space-x-3 mb-3">
        <FaEnvelope className="text-blue-500 text-xl" />
        <a href="mailto:your.email@example.com" className="text-lg text-gray-700 hover:text-blue-600">
          raselm282@gmail.com
        </a>
      </div>

      <div className="flex items-center space-x-3 mb-3">
        <FaPhone className="text-green-500 text-xl" />
        <a href="tel:+1234567890" className="text-lg text-gray-700 hover:text-green-600">
          +8801755495013
        </a>
      </div>

      <div className="flex items-center space-x-3">
        <FaWhatsapp className="text-green-500 text-xl" />
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-700 hover:text-green-600">
          WhatsApp: +8801755495013
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
