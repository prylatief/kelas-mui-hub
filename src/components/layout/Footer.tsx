
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-mui-darkBlue text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kelas PKU MUI</h3>
            <p className="text-gray-300">
              Platform berbagi materi kuliah, galeri kegiatan, dan informasi kelas
              untuk mahasiswa PKU MUI.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/repository" className="text-gray-300 hover:text-white">Repository</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white">Galeri</Link></li>
              <li><Link to="/info" className="text-gray-300 hover:text-white">Info Kelas</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Kontak</h4>
            <address className="not-italic text-gray-300">
              <p>Email: pku-mui@example.com</p>
              <p>Phone: +62 123 4567 890</p>
              <p>Address: Jalan MUI No. 123, Jakarta</p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} Kelas PKU MUI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
