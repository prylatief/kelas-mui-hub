import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, File, FileImage, FileVideo, Waves } from "lucide-react";

// Mock data for demonstration
const materials = [{
  id: 1,
  title: "Materi Pertemuan 1",
  description: "Pengenalan Mata Kuliah dan Silabus",
  type: "pdf",
  date: "2025-01-15",
  size: "2.4 MB"
}, {
  id: 2,
  title: "Materi Pertemuan 2",
  description: "Pembahasan Konsep Dasar",
  type: "pdf",
  date: "2025-01-22",
  size: "3.1 MB"
}, {
  id: 3,
  title: "Tutorial Praktikum",
  description: "Video penjelasan praktikum",
  type: "video",
  date: "2025-01-29",
  size: "45.8 MB"
}];
const papers = [{
  id: 1,
  title: "Makalah Kelompok 1",
  description: "Analisis Perkembangan Terkini",
  type: "pdf",
  date: "2025-02-05",
  size: "4.2 MB"
}, {
  id: 2,
  title: "Makalah Kelompok 2",
  description: "Studi Kasus dan Implementasi",
  type: "pdf",
  date: "2025-02-12",
  size: "3.7 MB"
}];
const assignments = [{
  id: 1,
  title: "Tugas Individu 1",
  description: "Deadline: 2025-02-20",
  type: "pdf",
  date: "2025-02-13",
  size: "1.2 MB"
}, {
  id: 2,
  title: "Tugas Kelompok 1",
  description: "Deadline: 2025-02-28",
  type: "pdf",
  date: "2025-02-14",
  size: "1.5 MB"
}];
const FileCard = ({
  file
}: {
  file: typeof materials[0];
}) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "video":
        return <FileVideo size={24} className="text-mui-teal" />;
      case "image":
        return <FileImage size={24} className="text-mui-teal" />;
      default:
        return <File size={24} className="text-mui-teal" />;
    }
  };
  return <Card className="hover:shadow-md transition-shadow border-t-4 border-t-mui-teal">
      <CardHeader>
        <CardTitle className="flex items-center">
          {getIcon(file.type)}
          <span className="ml-2">{file.title}</span>
        </CardTitle>
        <CardDescription>{file.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">
          Tanggal: {file.date} | Ukuran: {file.size}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="bg-gradient-to-r from-mui-teal to-mui-blue hover:from-mui-darkTeal hover:to-mui-darkBlue">
          <Download className="mr-2" size={16} />
          Unduh
        </Button>
      </CardFooter>
    </Card>;
};
const Repository = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return <div className="container mx-auto px-4 py-8 relative overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-mui-lightTeal/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-[200%] h-20 bg-[url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 134%22 preserveAspectRatio=%22none%22%3E%3Cpath d=%22M0 25.9c19.6-3.3 42.6-8.6 69-8.6 57.5 0 62.1 23.1 114.5 23.1 53.9 0 59.6-23.1 115.5-23.1 56.3 0 62.4 23.1 119.5 23.1 58.8 0 65.5-23.1 124.5-23.1 55.3 0 61 23.1 114.5 23.1 55.1 0 60.1-23.1 115.5-23.1 54.9 0 60.4 23.1 115.5 23.1 56.2 0 61.5-23.1 116-23.1 50.2 0 56.9 23.1 108 23.1 51.8 0 86.2-23.1 138.5-23.1 51.8 0 77.9 23.1 129 23.1v85.9H0V25.9z%22 fill=%22%230d9488%22 fill-opacity=%22.2%22/%3E%3Cpath d=%22M0 52.9c23.5-5.5 40.4-15.5 72-15.5 60.9 0 61.5 32.5 122 32.5 59.8 0 60.2-32.5 120-32.5 59.8 0 60.1 32.5 120 32.5 59.8 0 60.3-32.5 120-32.5 59.9 0 60.2 32.5 120 32.5 59.7 0 60.1-32.5 120-32.5 59.8 0 60.2 32.5 120 32.5 59.8 0 60.1-32.5 120-32.5 59.8 0 65.6 32.5 126 32.5 39.9 0 55.4-32.5 94-32.5 39 0 39 32.5 78 32.5v65H0V52.9z%22 fill=%22%230d9488%22 fill-opacity=%22.2%22/%3E%3C/svg%3E')] animate-wave"></div>
      </div>
      
      <div className="relative z-10 mb-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-mui-teal to-mui-blue text-transparent bg-clip-text">Repository File</h1>
        <p className="text-mui-darkGray">
          Akses semua materi kuliah, makalah, dan tugas dalam satu tempat.
        </p>
      </div>
      
      <div className="relative z-10 mb-6">
        <div className="relative">
          <input type="text" placeholder="Cari file atau materi..." className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-mui-teal" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        </div>
      </div>
      
      <Tabs defaultValue="materials" className="w-full relative z-10">
        <TabsList className="mb-6 bg-gray-100">
          <TabsTrigger value="materials" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-mui-teal data-[state=active]:to-mui-blue data-[state=active]:text-white">
            Ringkasan
          </TabsTrigger>
          <TabsTrigger value="papers" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-mui-teal data-[state=active]:to-mui-blue data-[state=active]:text-white">
            Makalah
          </TabsTrigger>
          <TabsTrigger value="assignments" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-mui-teal data-[state=active]:to-mui-blue data-[state=active]:text-white">Ringkasan</TabsTrigger>
        </TabsList>
        
        <TabsContent value="materials" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-mui-teal flex items-center">
              <Waves className="mr-2" size={20} />
              Materi Perkuliahan
            </h3>
            <Button className="bg-gradient-to-r from-mui-teal to-mui-blue hover:from-mui-darkTeal hover:to-mui-darkBlue">
              Upload Materi
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map(file => <FileCard key={file.id} file={file} />)}
          </div>
        </TabsContent>
        
        <TabsContent value="papers" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-mui-teal flex items-center">
              <Waves className="mr-2" size={20} />
              Makalah
            </h3>
            <Button className="bg-gradient-to-r from-mui-teal to-mui-blue hover:from-mui-darkTeal hover:to-mui-darkBlue">
              Upload Makalah
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {papers.map(file => <FileCard key={file.id} file={file} />)}
          </div>
        </TabsContent>
        
        <TabsContent value="assignments" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-mui-teal flex items-center">
              <Waves className="mr-2" size={20} />
              Tugas
            </h3>
            <Button className="bg-gradient-to-r from-mui-teal to-mui-blue hover:from-mui-darkTeal hover:to-mui-darkBlue">
              Upload Tugas
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assignments.map(file => <FileCard key={file.id} file={file} />)}
          </div>
        </TabsContent>
      </Tabs>
    </div>;
};
export default Repository;