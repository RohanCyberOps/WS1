import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: 'About Us',
      submenu: ['Our Story', 'Team', 'Mission']
    },
    {
      title: 'Services',
      submenu: ['Consulting', 'Development', 'Design']
    },
    {
      title: 'Contact',
      submenu: ['Support', 'Sales', 'Careers']
    }
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gray-800">Brand</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <div key={item.title} className="relative group">
                  <button
                    className="flex items-center text-gray-600 hover:text-gray-900"
                    onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                  >
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${activeDropdown === item.title ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <div key={item.title}>
              <button
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
              >
                {item.title}
              </button>
              <div className={`${activeDropdown === item.title ? 'block' : 'hidden'} pl-4`}>
                {item.submenu.map((subItem) => (
                  <a
                    key={subItem}
                    href="#"
                    className="block px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {subItem}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;