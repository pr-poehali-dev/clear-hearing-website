import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Home } from '@/components/Home';
import { Catalog } from '@/components/Catalog';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Articles } from '@/components/Articles';
import { Admin } from '@/components/Admin';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { loadData } from '@/utils/storage';
import { SiteData } from '@/types';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const ADMIN_PASSWORD = '3956Qqqq';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [prevSection, setPrevSection] = useState('home');
  const [data, setData] = useState<SiteData>(loadData());
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [password, setPassword] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(loadData());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleAdminLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setShowAdmin(true);
      setShowAdminLogin(false);
      setPassword('');
      toast.success('Вход выполнен');
    } else {
      toast.error('Неверный пароль');
    }
  };

  const handleAdminClose = () => {
    setShowAdmin(false);
    setData(loadData());
  };

  const handleSectionChange = (section: string) => {
    if (section !== activeSection) {
      setIsTransitioning(true);
      setPrevSection(activeSection);
      setTimeout(() => {
        setActiveSection(section);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const handleNavigateToAppointment = () => {
    handleSectionChange('home');
    setTimeout(() => {
      const appointmentButton = document.querySelector('[data-appointment-button]') as HTMLElement;
      if (appointmentButton) {
        appointmentButton.click();
      }
    }, 300);
  };

  if (showAdmin) {
    return <Admin onClose={handleAdminClose} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <main className={isTransitioning ? 'opacity-0 transition-opacity duration-150' : 'opacity-100 transition-opacity duration-150'}>
        {activeSection === 'home' && <Home onNavigate={handleSectionChange} />}
        {activeSection === 'catalog' && <Catalog products={data.products} onNavigateToAppointment={handleNavigateToAppointment} />}
        {activeSection === 'services' && <Services services={data.services} onNavigateToAppointment={handleNavigateToAppointment} />}
        {activeSection === 'about' && <About articles={data.articles} />}
        {activeSection === 'articles' && <Articles articles={data.articles} />}
      </main>

      <footer className="relative bg-gradient-to-br from-primary/5 to-accent/10 py-16 mt-32 border-t-2 border-primary/20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Ясный слух</h3>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Профессиональное слухопротезирование в Москве
            </p>
          </div>
          
          <div className="border-t border-primary/20 pt-6 mt-6">
            <p className="text-muted-foreground mb-4 font-medium">© 2025 Ясный слух. Все права защищены.</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAdminLogin(true)}
              className="text-xs opacity-40 hover:opacity-100 transition-opacity"
            >
              <Icon name="Lock" size={14} className="mr-1" />
              Админ-панель
            </Button>
          </div>
        </div>
      </footer>

      {showAdminLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-md mx-4">
            <CardHeader>
              <CardTitle>Вход в админ-панель</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAdminLogin()}
              />
              <div className="flex gap-2">
                <Button onClick={handleAdminLogin} className="flex-1">
                  Войти
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowAdminLogin(false);
                    setPassword('');
                  }}
                  className="flex-1"
                >
                  Отмена
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Index;