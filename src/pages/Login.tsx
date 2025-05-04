import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const {
    toast
  } = useToast();
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would normally handle authentication
    toast({
      title: "Login Berhasil",
      description: "Selamat datang kembali di Kelas PKU MUI Hub!"
    });
  };
  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would normally handle registration
    toast({
      title: "Registrasi Berhasil",
      description: "Akun berhasil dibuat! Silakan login."
    });
  };
  return <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Selamat Datang</CardTitle>
            <CardDescription>Masuk atau daftar untuk mengakses semua fitur Kelas PKU MUI 19</CardDescription>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="login">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Masuk</TabsTrigger>
                <TabsTrigger value="register">Daftar</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="nama@email.com" required value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <a href="#" className="text-sm text-mui-blue hover:underline">
                          Lupa password?
                        </a>
                      </div>
                      <Input id="password" type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    
                    <Button type="submit" className="w-full bg-mui-blue">
                      Masuk
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleRegister}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap</Label>
                      <Input id="name" placeholder="Masukkan nama lengkap" required value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="reg-email">Email</Label>
                      <Input id="reg-email" type="email" placeholder="nama@email.com" required value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="reg-password">Password</Label>
                      <Input id="reg-password" type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    
                    <Button type="submit" className="w-full bg-mui-blue">
                      Daftar
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          
          
        </Card>
      </div>
    </div>;
};
export default Login;