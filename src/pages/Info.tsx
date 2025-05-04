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
    schedule: [{
      day: "Senin",
      time: "08:00 - 10:30",
      subject: "Metodologi Penelitian",
      lecturer: "Dr. Ahmad Fauzi"
    }, {
      day: "Rabu",
      time: "13:00 - 15:30",
      subject: "Studi Islam Kontemporer",
      lecturer: "Prof. Hasan Basri"
    }, {
      day: "Jumat",
      time: "08:00 - 10:30",
      subject: "Analisis Sosial",
      lecturer: "Dr. Siti Rahma"
    }],
    lecturers: [{
      name: "Dr. Ahmad Fauzi",
      position: "Ketua Program",
      specialization: "Metodologi Penelitian",
      email: "ahmad.fauzi@mui.ac.id"
    }, {
      name: "Prof. Hasan Basri",
      position: "Dosen Senior",
      specialization: "Studi Islam Kontemporer",
      email: "hasan.basri@mui.ac.id"
    }, {
      name: "Dr. Siti Rahma",
      position: "Dosen",
      specialization: "Analisis Sosial",
      email: "siti.rahma@mui.ac.id"
    }],
    classOfficers: [{
      name: "Muhammad Rizki",
      role: "Ketua Kelas",
      contact: "0812-3456-7890"
    }, {
      name: "Aisyah Putri",
      role: "Sekretaris",
      contact: "0813-4567-8901"
    }, {
      name: "Ahmad Fadli",
      role: "Bendahara",
      contact: "0814-5678-9012"
    }]
  };
  return;
};
export default Info;