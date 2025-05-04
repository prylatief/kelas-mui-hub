import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, FolderOpen, Image, Info, Menu, X, Waves } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="bg-gradient-to-r from-mui-teal to-mui-blue text-white shadow-md relative overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-[200%] h-10 bg-[url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 134%22 preserveAspectRatio=%22none%22%3E%3Cpath d=%22M0 25.9c19.6-3.3 42.6-8.6 69-8.6 57.5 0 62.1 23.1 114.5 23.1 53.9 0 59.6-23.1 115.5-23.1 56.3 0 62.4 23.1 119.5 23.1 58.8 0 65.5-23.1 124.5-23.1 55.3 0 61 23.1 114.5 23.1 55.1 0 60.1-23.1 115.5-23.1 54.9 0 60.4 23.1 115.5 23.1 56.2 0 61.5-23.1 116-23.1 50.2 0 56.9 23.1 108 23.1 51.8 0 86.2-23.1 138.5-23.1 51.8 0 77.9 23.1 129 23.1v85.9H0V25.9z%22 fill=%22%23ffffff%22/%3E%3C/svg%3E')] animate-wave"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between py-4">
          

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/repository" className="hover:text-mui-lightGray transition-colors flex items-center gap-1">
              <FolderOpen size={18} />
              <span>Repository</span>
            </Link>
            <Link to="/gallery" className="hover:text-mui-lightGray transition-colors flex items-center gap-1">
              <Image size={18} />
              <span>Galeri</span>
            </Link>
            <Link to="/info" className="hover:text-mui-lightGray transition-colors flex items-center gap-1">
              
              
            </Link>
            <Button asChild variant="outline" className="bg-white text-mui-teal hover:bg-mui-lightGray border-none">
              <Link to="/login" className="flex items-center gap-1">
                <User size={18} />
                <span>Login</span>
              </Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" className="text-white hover:bg-white/10" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/repository" className="hover:bg-white/10 p-2 rounded transition-colors flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <FolderOpen size={18} />
                <span>Repository</span>
              </Link>
              <Link to="/gallery" className="hover:bg-white/10 p-2 rounded transition-colors flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Image size={18} />
                <span>Galeri</span>
              </Link>
              <Link to="/info" className="hover:bg-white/10 p-2 rounded transition-colors flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Info size={18} />
                <span>Info Kelas</span>
              </Link>
              <Button asChild variant="outline" className="w-full bg-white text-mui-teal hover:bg-mui-lightGray border-none">
                <Link to="/login" className="flex items-center justify-center gap-2">
                  <User size={18} />
                  <span>Login</span>
                </Link>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;