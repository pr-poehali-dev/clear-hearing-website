import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HomeProps {
  onNavigate: (section: string) => void;
}

export const Home = ({ onNavigate }: HomeProps) => {
  return (
    <div className="animate-fade-in">
      <section className="py-20 px-4 bg-gradient-to-b from-accent/30 to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Верните радость слышать мир
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Современные слуховые аппараты высокого качества. Индивидуальный подбор, 
            настройка и сервисное обслуживание. Помогаем людям слышать уже более 15 лет.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              onClick={() => onNavigate('catalog')}
              className="bg-primary hover:bg-primary/90 text-lg px-8"
            >
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('services')}
              className="text-lg px-8"
            >
              <Icon name="Stethoscope" size={20} className="mr-2" />
              Наши услуги
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};