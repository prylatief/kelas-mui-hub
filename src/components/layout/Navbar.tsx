
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, FolderOpen, Image, Info, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-mui-blue text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-white text-mui-blue flex items-center justify-center font-bold">
              M
            </div>
            <span className="font-bold text-xl">Kelas PKU MUI</span>
          </Link>

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
              <Info size={18} />
              <span>Info Kelas</span>
            </Link>
            <Button asChild variant="outline" className="bg-white text-mui-blue hover:bg-mui-lightGray">
              <Link to="/login" className="flex items-center gap-1">
                <User size={18} />
                <span>Login</span>
              </Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-mui-darkBlue"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/repository" 
                className="hover:bg-mui-darkBlue p-2 rounded transition-colors flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <FolderOpen size={18} />
                <span>Repository</span>
              </Link>
              <Link 
                to="/gallery" 
                className="hover:bg-mui-darkBlue p-2 rounded transition-colors flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image size={18} />
                <span>Galeri</span>
              </Link>
              <Link 
                to="/info" 
                className="hover:bg-mui-darkBlue p-2 rounded transition-colors flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Info size={18} />
                <span>Info Kelas</span>
              </Link>
              <Button asChild variant="outline" className="w-full bg-white text-mui-blue hover:bg-mui-lightGray">
                <Link to="/login" className="flex items-center justify-center gap-2">
                  <User size={18} />
                  <span>Login</span>
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
