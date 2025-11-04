import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Header = ({ activeSection, onSectionChange }: HeaderProps) => {
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-primary/20 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src="https://cdn.poehali.dev/files/74afe177-1fa0-4047-aa20-52fa8d2c4683.png" 
              alt="Ясный слух" 
              className="h-9 sm:h-11 w-auto"
            />
            <h1 className="text-lg sm:text-xl font-semibold text-foreground tracking-tight">Ясный слух</h1>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </Button>

          <nav className="hidden md:flex items-center gap-2 flex-wrap">
            <Button
              variant={activeSection === 'home' ? 'default' : 'ghost'}
              onClick={() => onSectionChange('home')}
              className="hover-scale"
            >
              Главная
            </Button>
            <Button
              variant={activeSection === 'catalog' ? 'default' : 'ghost'}
              onClick={() => onSectionChange('catalog')}
              className="hover-scale"
            >
              Каталог
            </Button>
            <Button
              variant={activeSection === 'services' ? 'default' : 'ghost'}
              onClick={() => onSectionChange('services')}
              className="hover-scale"
            >
              Услуги
            </Button>
            <Button
              variant={activeSection === 'about' ? 'default' : 'ghost'}
              onClick={() => onSectionChange('about')}
              className="hover-scale"
            >
              О компании
            </Button>
            <Button
              variant={activeSection === 'articles' ? 'default' : 'ghost'}
              onClick={() => onSectionChange('articles')}
              className="hover-scale"
            >
              Статьи
            </Button>
            <Button
              onClick={() => setShowContactDialog(true)}
              className="bg-primary hover:bg-primary/90"
              data-appointment-button
            >
              <Icon name="Calendar" size={18} className="mr-2" />
              Запись на приём
            </Button>
          </nav>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-2 mt-4 pb-2 border-t pt-4 animate-fade-in">
            <Button
              variant={activeSection === 'home' ? 'default' : 'ghost'}
              onClick={() => {
                onSectionChange('home');
                setMobileMenuOpen(false);
              }}
              className="w-full justify-start"
            >
              Главная
            </Button>
            <Button
              variant={activeSection === 'catalog' ? 'default' : 'ghost'}
              onClick={() => {
                onSectionChange('catalog');
                setMobileMenuOpen(false);
              }}
              className="w-full justify-start"
            >
              Каталог
            </Button>
            <Button
              variant={activeSection === 'services' ? 'default' : 'ghost'}
              onClick={() => {
                onSectionChange('services');
                setMobileMenuOpen(false);
              }}
              className="w-full justify-start"
            >
              Услуги
            </Button>
            <Button
              variant={activeSection === 'about' ? 'default' : 'ghost'}
              onClick={() => {
                onSectionChange('about');
                setMobileMenuOpen(false);
              }}
              className="w-full justify-start"
            >
              О компании
            </Button>
            <Button
              variant={activeSection === 'articles' ? 'default' : 'ghost'}
              onClick={() => {
                onSectionChange('articles');
                setMobileMenuOpen(false);
              }}
              className="w-full justify-start"
            >
              Статьи
            </Button>
            <Button
              onClick={() => {
                setShowContactDialog(true);
                setMobileMenuOpen(false);
              }}
              className="w-full justify-start bg-primary hover:bg-primary/90"
            >
              <Icon name="Calendar" size={18} className="mr-2" />
              Запись на приём
            </Button>
          </nav>
        )}
      </div>

      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Запись на приём</DialogTitle>
            <DialogDescription>
              Выберите удобный способ связи
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="https://t.me/+79629102391"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border rounded-lg hover:bg-accent transition-colors"
            >
              <Icon name="Send" className="text-primary" size={24} />
              <div>
                <div className="font-semibold">Telegram</div>
                <div className="text-sm text-muted-foreground">Написать в мессенджер</div>
              </div>
            </a>
            <a
              href="https://wa.me/79629102391"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border rounded-lg hover:bg-accent transition-colors"
            >
              <Icon name="MessageCircle" className="text-primary" size={24} />
              <div>
                <div className="font-semibold">WhatsApp</div>
                <div className="text-sm text-muted-foreground">Написать в WhatsApp</div>
              </div>
            </a>
            <a
              href="tel:+74957990926"
              className="flex items-center gap-3 p-4 border rounded-lg hover:bg-accent transition-colors"
            >
              <Icon name="Phone" className="text-primary" size={24} />
              <div>
                <div className="font-semibold">Позвонить</div>
                <div className="text-sm text-muted-foreground">+7 495 799-09-26</div>
              </div>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};