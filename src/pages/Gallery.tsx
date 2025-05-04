
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Image as ImageIcon, FileVideo } from "lucide-react";

// Mock data
const photoAlbums = [
  {
    id: 1,
    title: "Pertemuan Perdana",
    date: "Januari 2025",
    cover: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    count: 24
  },
  {
    id: 2,
    title: "Studi Kasus Lapangan",
    date: "Februari 2025",
    cover: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGxlZ2UlMjBzdHVkZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    count: 36
  },
  {
    id: 3,
    title: "Seminar Nasional",
    date: "Maret 2025",
    cover: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    count: 18
  },
  {
    id: 4,
    title: "Workshop Praktek",
    date: "April 2025",
    cover: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    count: 42
  }
];

const videoAlbums = [
  {
    id: 1,
    title: "Rekaman Perkuliahan",
    date: "Januari - April 2025",
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=80",
    count: 8
  },
  {
    id: 2,
    title: "Tutorial Praktikum",
    date: "Februari 2025",
    cover: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=80",
    count: 5
  }
];

const AlbumCard = ({ album, type }: { album: typeof photoAlbums[0]; type: "photo" | "video" }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      <CardContent className="p-0 relative">
        <div className="aspect-square relative overflow-hidden">
          <img 
            src={album.cover} 
            alt={album.title} 
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
            <h3 className="font-bold text-lg">{album.title}</h3>
            <p className="text-sm opacity-90">{album.date}</p>
            <div className="flex items-center mt-2 gap-1">
              {type === "photo" ? <ImageIcon size={16} /> : <FileVideo size={16} />}
              <span className="text-sm">{album.count} {type === "photo" ? "foto" : "video"}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Galeri Kegiatan</h1>
        <p className="text-mui-darkGray">
          Koleksi foto dan video kegiatan kelas PKU MUI.
        </p>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Cari album foto atau video..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-mui-blue"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="photos" className="flex items-center gap-1">
            <ImageIcon size={16} />
            <span>Foto</span>
          </TabsTrigger>
          <TabsTrigger value="videos" className="flex items-center gap-1">
            <FileVideo size={16} />
            <span>Video</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="photos" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Album Foto</h3>
            <Button className="bg-mui-green">Upload Foto</Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photoAlbums.map(album => (
              <AlbumCard key={album.id} album={album} type="photo" />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="videos" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Album Video</h3>
            <Button className="bg-mui-green">Upload Video</Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {videoAlbums.map(album => (
              <AlbumCard key={album.id} album={album} type="video" />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Gallery;
