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

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-primary" size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-3">15+ лет опыта</h4>
              <p className="text-muted-foreground">
                Профессиональная помощь в подборе и настройке слуховых аппаратов
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="HeartHandshake" className="text-primary" size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Индивидуальный подход</h4>
              <p className="text-muted-foreground">
                Учитываем особенности слуха каждого клиента
              </p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" className="text-primary" size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Сервис и поддержка</h4>
              <p className="text-muted-foreground">
                Гарантийное и постгарантийное обслуживание
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
