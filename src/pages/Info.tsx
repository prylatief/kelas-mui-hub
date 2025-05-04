
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, User } from "lucide-react";

const Info = () => {
  // Mock data
  const classDetails = {
    name: "Kelas PKU MUI Angkatan 2025",
    semester: "Semester 1",
    year: "2025",
    students: 34,
    schedule: [
      { day: "Senin", time: "08:00 - 10:30", subject: "Metodologi Penelitian", lecturer: "Dr. Ahmad Fauzi" },
      { day: "Rabu", time: "13:00 - 15:30", subject: "Studi Islam Kontemporer", lecturer: "Prof. Hasan Basri" },
      { day: "Jumat", time: "08:00 - 10:30", subject: "Analisis Sosial", lecturer: "Dr. Siti Rahma" }
    ],
    lecturers: [
      { 
        name: "Dr. Ahmad Fauzi", 
        position: "Ketua Program", 
        specialization: "Metodologi Penelitian",
        email: "ahmad.fauzi@mui.ac.id" 
      },
      { 
        name: "Prof. Hasan Basri", 
        position: "Dosen Senior", 
        specialization: "Studi Islam Kontemporer",
        email: "hasan.basri@mui.ac.id" 
      },
      { 
        name: "Dr. Siti Rahma", 
        position: "Dosen", 
        specialization: "Analisis Sosial",
        email: "siti.rahma@mui.ac.id" 
      }
    ],
    classOfficers: [
      { 
        name: "Muhammad Rizki", 
        role: "Ketua Kelas", 
        contact: "0812-3456-7890" 
      },
      { 
        name: "Aisyah Putri", 
        role: "Sekretaris", 
        contact: "0813-4567-8901" 
      },
      { 
        name: "Ahmad Fadli", 
        role: "Bendahara", 
        contact: "0814-5678-9012" 
      }
    ]
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Informasi Kelas</h1>
        <p className="text-mui-darkGray">
          Detail kelas, jadwal perkuliahan, informasi dosen, dan pengurus kelas.
        </p>
      </div>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Detail Kelas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-mui-lightGray rounded-lg">
              <h3 className="font-semibold text-mui-darkGray mb-1">Nama Kelas</h3>
              <p className="text-lg">{classDetails.name}</p>
            </div>
            
            <div className="p-4 bg-mui-lightGray rounded-lg">
              <h3 className="font-semibold text-mui-darkGray mb-1">Periode</h3>
              <p className="text-lg">{classDetails.semester} ({classDetails.year})</p>
            </div>
            
            <div className="p-4 bg-mui-lightGray rounded-lg">
              <h3 className="font-semibold text-mui-darkGray mb-1">Jumlah Mahasiswa</h3>
              <p className="text-lg">{classDetails.students} orang</p>
            </div>
            
            <div className="p-4 bg-mui-lightGray rounded-lg">
              <h3 className="font-semibold text-mui-darkGray mb-1">Mata Kuliah</h3>
              <p className="text-lg">{classDetails.schedule.length} Mata Kuliah</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="schedule" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="schedule" className="flex items-center gap-1">
            <Calendar size={16} />
            <span>Jadwal Kuliah</span>
          </TabsTrigger>
          <TabsTrigger value="lecturers" className="flex items-center gap-1">
            <User size={16} />
            <span>Dosen Pengajar</span>
          </TabsTrigger>
          <TabsTrigger value="officers" className="flex items-center gap-1">
            <User size={16} />
            <span>Pengurus Kelas</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="schedule" className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Jadwal Perkuliahan</h3>
          
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Hari</TableHead>
                  <TableHead>Waktu</TableHead>
                  <TableHead>Mata Kuliah</TableHead>
                  <TableHead>Dosen</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {classDetails.schedule.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.day}</TableCell>
                    <TableCell>{item.time}</TableCell>
                    <TableCell>{item.subject}</TableCell>
                    <TableCell>{item.lecturer}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="lecturers" className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Dosen Pengajar</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {classDetails.lecturers.map((lecturer, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="bg-mui-blue text-white text-lg">
                        {lecturer.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">{lecturer.name}</h4>
                      <p className="text-sm text-mui-darkGray">{lecturer.position}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Bidang:</span> {lecturer.specialization}</p>
                    <p><span className="font-semibold">Email:</span> {lecturer.email}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="officers" className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Pengurus Kelas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {classDetails.classOfficers.map((officer, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="bg-mui-green text-white text-lg">
                        {officer.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold">{officer.name}</h4>
                      <p className="text-sm text-mui-darkGray">{officer.role}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Kontak:</span> {officer.contact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Info;
