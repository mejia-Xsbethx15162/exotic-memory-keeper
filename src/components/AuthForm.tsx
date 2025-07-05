import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface AuthFormProps {
  onLogin: (name: string) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const { toast } = useToast();

  // Datos de usuarios permitidos (se puede expandir con registro)
  const [allowedUsers, setAllowedUsers] = useState([
    { email: 'karen@example.com', password: 'karen123', name: 'Karen' },
    { email: 'creator@example.com', password: 'creator123', name: 'Creador' }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isRegistering) {
      // Lógica de registro
      if (password !== confirmPassword) {
        toast({
          title: "Error en registro",
          description: "Las contraseñas no coinciden.",
          variant: "destructive",
        });
        return;
      }

      if (password.length < 6) {
        toast({
          title: "Error en registro",
          description: "La contraseña debe tener al menos 6 caracteres.",
          variant: "destructive",
        });
        return;
      }

      if (allowedUsers.find(u => u.email === email)) {
        toast({
          title: "Usuario ya existe",
          description: "Este correo ya está registrado. Intenta iniciar sesión.",
          variant: "destructive",
        });
        return;
      }

      // Agregar nuevo usuario
      const newUser = { email, password, name };
      setAllowedUsers([...allowedUsers, newUser]);
      
      toast({
        title: "¡Registro exitoso!",
        description: `Bienvenid@ ${name}. Ahora puedes acceder a los recuerdos.`,
      });
      
      onLogin(name);
    } else {
      // Lógica de login
      const user = allowedUsers.find(u => u.email === email);
      
      if (!user) {
        toast({
          title: "Usuario no encontrado",
          description: "Este correo no está registrado. Regístrate primero o verifica tus credenciales.",
          variant: "destructive",
        });
        return;
      }

      if (user.password !== password) {
        toast({
          title: "Contraseña incorrecta",
          description: "Por favor verifica tu contraseña.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: `¡Bienvenid@ ${user.name}!`,
        description: "Disfruta reviviendo estos hermosos recuerdos de viaje.",
      });
      
      onLogin(user.name);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-memory p-4">
      <Card className="w-full max-w-md shadow-warm border-0 bg-card/80 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl bg-gradient-sunset bg-clip-text text-transparent">
            Recuerdos de Viaje
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Una tarjeta especial de memorias exóticas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegistering && (
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-warm-sunset/20 focus:border-warm-sunset focus:ring-warm-sunset"
                  required
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-warm-sunset/20 focus:border-warm-sunset focus:ring-warm-sunset"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                placeholder={isRegistering ? "Mínimo 6 caracteres" : "Tu contraseña"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-warm-sunset/20 focus:border-warm-sunset focus:ring-warm-sunset"
                required
              />
            </div>
            {isRegistering && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirma tu contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="border-warm-sunset/20 focus:border-warm-sunset focus:ring-warm-sunset"
                  required
                />
              </div>
            )}
            <Button 
              type="submit" 
              className="w-full bg-gradient-sunset hover:opacity-90 text-warm-sunset-foreground shadow-warm"
            >
              {isRegistering ? 'Crear Cuenta' : 'Acceder a los Recuerdos'}
            </Button>
          </form>
          
          <div className="mt-4 text-center">
            <Button 
              variant="ghost" 
              onClick={() => {
                setIsRegistering(!isRegistering);
                setEmail('');
                setPassword('');
                setName('');
                setConfirmPassword('');
              }}
              className="text-warm-sunset hover:text-warm-sunset hover:bg-warm-sunset/10"
            >
              {isRegistering ? '¿Ya tienes cuenta? Inicia sesión' : '¿No tienes cuenta? Regístrate'}
            </Button>
          </div>

          {!isRegistering && (
            <div className="mt-6 p-4 bg-golden-sand/10 rounded-lg border border-golden-sand/20">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Usuarios existentes:</strong>
              </p>
              <div className="text-xs space-y-1 text-muted-foreground">
                <p>• Karen: karen@example.com / karen123</p>
                <p>• Creador: creator@example.com / creator123</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};