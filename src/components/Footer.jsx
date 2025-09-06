import { Github, Linkedin, Mail, Code } from "lucide-react";


const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-blue-500 rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Portfolio
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-xs">
            Crafting digital experiences with passion and precision. Let's build something amazing together.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h3>
          <div className="space-y-2">
            {["Home", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
                className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Connect</h3>
          <div className="flex space-x-4">
            {socialLinks.map(({ icon, href, label }) => {
              const Icon = icon;
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-transform transform hover:scale-105 active:scale-95"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © 2025 Portfolio. Built with React, Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

