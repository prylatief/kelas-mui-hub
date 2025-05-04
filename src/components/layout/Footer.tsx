
import { Link } from "react-router-dom";
import { Waves } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-mui-teal to-mui-blue text-white py-8 mt-auto relative overflow-hidden">
      {/* Wave Pattern */}
      <div className="absolute top-0 left-0 w-full">
        <div className="w-full h-10 bg-white opacity-10" style={{
          maskImage: "url('data:image/svg+xml;charset=utf8,%3Csvg viewBox=%220 0 1200 120%22 preserveAspectRatio=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z%22/%3E%3C/svg%3E')",
          WebkitMaskImage: "url('data:image/svg+xml;charset=utf8,%3Csvg viewBox=%220 0 1200 120%22 preserveAspectRatio=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z%22/%3E%3C/svg%3E')",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%"
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Waves size={20} className="mr-2" />
              Kelas PKU MUI
            </h3>
            <p className="text-gray-300">
              Platform berbagi materi kuliah, galeri kegiatan, dan informasi kelas
              untuk mahasiswa PKU MUI.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/repository" className="text-gray-300 hover:text-white transition-colors">Repository</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Galeri</Link></li>
              <li><Link to="/info" className="text-gray-300 hover:text-white transition-colors">Info Kelas</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Kontak</h4>
            <address className="not-italic text-gray-300">
              <p>Email: pku-mui19@example.com</p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/20 text-center text-gray-400">
          <p>&copy; {currentYear} Kelas PKU MUI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
