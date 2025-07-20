import { useState } from "react";
import { Header } from "@/components/home/Header";
import { MobileMenu } from "@/components/home/MobileMenu";
import { Footer } from "@/components/home/Footer";
import { Send, MessageSquare, Twitter, Bot } from "lucide-react";

export default function Contact() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API endpoint)
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMenuOpen={isMobileMenuOpen}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <MessageSquare className="w-16 h-16 mx-auto mb-4 text-green-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Get in Touch
              </h1>
              <p className="mt-4 text-lg text-gray-400">
                Have a question, a partnership proposal, or just want to say hi?
                Drop us a line.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-gray-900/50 p-8 rounded-lg border border-gray-800"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-gray-800 border-gray-700 rounded-md py-2 px-4 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-gray-800 border-gray-700 rounded-md py-2 px-4 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    className="w-full bg-gray-800 border-gray-700 rounded-md py-2 px-4 focus:ring-green-500 focus:border-green-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-400 hover:bg-green-500 transition-transform transform hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-3" />
                  Send Message
                </button>
              </form>

              <div className="space-y-6 pt-8">
                <h3 className="text-2xl font-semibold text-white">
                  Or find us on social media:
                </h3>
                <a
                  href="https://twitter.com/memedotfun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <Twitter className="w-8 h-8 text-sky-400 mr-4" />
                  <div>
                    <p className="font-semibold">Twitter / X</p>
                    <p className="text-sm text-gray-400">
                      Follow us for the latest updates and announcements.
                    </p>
                  </div>
                </a>
                <a
                  href="https://discord.gg/your-invite-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <Bot className="w-8 h-8 text-indigo-400 mr-4" />
                  <div>
                    <p className="font-semibold">Discord</p>
                    <p className="text-sm text-gray-400">
                      Join our community for discussions, support, and events.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
