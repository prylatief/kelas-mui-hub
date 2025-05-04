import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, File, FileImage, FileVideo } from "lucide-react";

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
        return <FileVideo size={24} />;
      case "image":
        return <FileImage size={24} />;
      default:
        return <File size={24} />;
    }
  };
  return <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        
        
      </CardHeader>
      
    </Card>;
};
const Repository = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Repository File</h1>
        <p className="text-mui-darkGray">
          Akses semua materi kuliah, makalah, dan tugas dalam satu tempat.
        </p>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <input type="text" placeholder="Cari file atau materi..." className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-mui-blue" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        </div>
      </div>
      
      <Tabs defaultValue="materials" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="materials">Materi Kuliah</TabsTrigger>
          <TabsTrigger value="papers">Makalah</TabsTrigger>
          <TabsTrigger value="assignments">Ringkasan</TabsTrigger>
        </TabsList>
        
        <TabsContent value="materials" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Materi Perkuliahan</h3>
            <Button className="bg-mui-green">Upload Materi</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map(file => <FileCard key={file.id} file={file} />)}
          </div>
        </TabsContent>
        
        <TabsContent value="papers" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Makalah</h3>
            <Button className="bg-mui-green">Upload Makalah</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {papers.map(file => <FileCard key={file.id} file={file} />)}
          </div>
        </TabsContent>
        
        <TabsContent value="assignments" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Tugas</h3>
            <Button className="bg-mui-green">Upload Tugas</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assignments.map(file => <FileCard key={file.id} file={file} />)}
          </div>
        </TabsContent>
      </Tabs>
    </div>;
};
export default Repository;