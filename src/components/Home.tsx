import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

interface HomeProps {
  onNavigate: (section: string) => void;
}

export const Home = ({ onNavigate }: HomeProps) => {
  return (
    <div>
      <section className="py-20 px-4 bg-gradient-to-b from-accent/30 to-white animate-fade-in">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl font-bold mb-6 text-foreground animate-scale-in">
            Верните радость слышать мир
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Современные слуховые аппараты высокого качества. Индивидуальный подбор, 
            настройка и сервисное обслуживание. Помогаем людям слышать уже более 15 лет.
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              onClick={() => onNavigate('catalog')}
              className="bg-primary hover:bg-primary/90 text-lg px-8 hover-scale"
            >
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('services')}
              className="text-lg px-8 hover-scale"
            >
              <Icon name="Stethoscope" size={20} className="mr-2" />
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="delivery" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="delivery" className="text-lg">Доставка и оплата</TabsTrigger>
              <TabsTrigger value="contacts" className="text-lg">Контакты</TabsTrigger>
            </TabsList>

            <TabsContent value="delivery" className="animate-fade-in">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Доставка</h3>
                  <img 
                    src="https://cdn.poehali.dev/files/21133f91-8c75-47da-b7a8-0fdabd840c2d.png" 
                    alt="Способы доставки"
                    className="w-full rounded-lg shadow-lg hover-scale"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-6">Оплата</h3>
                  <img 
                    src="https://cdn.poehali.dev/files/63d892bd-e56b-4118-83c6-6cb4396c5d67.png" 
                    alt="Способы оплаты"
                    className="w-full rounded-lg shadow-lg hover-scale"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contacts" className="animate-fade-in">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Icon name="MapPin" className="text-primary mt-1" size={24} />
                        <div>
                          <h4 className="font-semibold mb-1">Адрес</h4>
                          <p className="text-muted-foreground">ул. Люблинская д. 100 кор. 2, Москва, Россия</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Phone" className="text-primary mt-1" size={24} />
                        <div>
                          <h4 className="font-semibold mb-1">Телефон</h4>
                          <a href="tel:+74957990926" className="text-muted-foreground hover:text-primary">
                            +7 (495) 799-09-26
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Icon name="Mail" className="text-primary mt-1" size={24} />
                        <div>
                          <h4 className="font-semibold mb-1">Email</h4>
                          <a href="mailto:info@yasnyzvuk.ru" className="text-muted-foreground hover:text-primary">
                            info@yasnyzvuk.ru
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Clock" className="text-primary mt-1" size={24} />
                        <div>
                          <h4 className="font-semibold mb-1">Режим работы</h4>
                          <p className="text-muted-foreground">пн.-сб.: 10:00-19:00</p>
                          <p className="text-muted-foreground">вс.: выходной</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};