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
      <section className="relative py-20 sm:py-32 px-4 overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-white"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm animate-scale-in">
            🎧 Профессиональная слухопротезирование
          </div>
          
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 sm:mb-8 text-foreground animate-scale-in leading-tight">
            Верните радость<br />слышать мир
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 sm:mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in font-medium" style={{ animationDelay: '0.2s' }}>
            Современные слуховые аппараты высокого качества.<br className="hidden sm:block" />
            Индивидуальный подбор, настройка и сервисное обслуживание.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              onClick={() => onNavigate('catalog')}
              className="bg-primary hover:bg-primary/90 text-lg px-10 py-7 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all w-full sm:w-auto"
            >
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('services')}
              className="text-lg px-10 py-7 rounded-xl font-bold border-2 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all w-full sm:w-auto"
            >
              <Icon name="Stethoscope" size={20} className="mr-2" />
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-white via-primary/5 to-white">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="delivery" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 sm:mb-12 p-2 bg-white shadow-md rounded-2xl">
              <TabsTrigger value="delivery" className="text-sm sm:text-base md:text-lg font-bold rounded-xl py-3 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg">
                Доставка и оплата
              </TabsTrigger>
              <TabsTrigger value="contacts" className="text-sm sm:text-base md:text-lg font-bold rounded-xl py-3 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg">
                Контакты
              </TabsTrigger>
            </TabsList>

            <TabsContent value="delivery" className="animate-fade-in">
              <div className="space-y-8 sm:space-y-12">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-foreground">Доставка</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    <Card className="hover-scale group">
                      <CardContent className="pt-8 pb-8 text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform">
                          <Icon name="Package" className="text-white" size={36} />
                        </div>
                        <h4 className="text-2xl font-bold mb-4 text-foreground">Самовывоз</h4>
                        <p className="text-muted-foreground mb-4">
                          Вы можете забрать свой заказ в нашем центре слухопротезирования.
                        </p>
                        <div className="text-left space-y-2 text-sm">
                          <p><strong>Адрес:</strong> ул. Люблинская д. 100 кор. 2, Москва</p>
                          <p><strong>Время работы:</strong> Пн-Сб: 10:00-19:00, Вс: выходной</p>
                          <p className="text-green-600 font-semibold">Стоимость: Бесплатно</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover-scale">
                      <CardContent className="pt-6 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon name="Truck" className="text-primary" size={32} />
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Курьер по Москве</h4>
                        <p className="text-muted-foreground mb-4">
                          Доставка курьером по Москве в пределах МКАД.
                        </p>
                        <div className="text-left space-y-2 text-sm">
                          <p><strong>Сроки:</strong> 1-2 рабочих дня</p>
                          <p><strong>Стоимость:</strong> 300 ₽</p>
                          <p className="text-green-600 font-semibold">Бесплатно: При заказе от 10 000 ₽</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover-scale">
                      <CardContent className="pt-6 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon name="MapPin" className="text-primary" size={32} />
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Почта России</h4>
                        <p className="text-muted-foreground mb-4">
                          Доставка в любой регион России.
                        </p>
                        <div className="text-left space-y-2 text-sm">
                          <p><strong>Сроки:</strong> 5-14 рабочих дней</p>
                          <p><strong>Стоимость:</strong> от 350 ₽ (зависит от региона)</p>
                          <p><strong>Отслеживание:</strong> Трек-номер предоставляется</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Оплата</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    <Card className="hover-scale">
                      <CardContent className="pt-6 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon name="CreditCard" className="text-primary" size={32} />
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Банковской картой</h4>
                        <p className="text-muted-foreground mb-4">
                          Оплата банковской картой только при самовывозе.
                        </p>
                        <div className="text-left space-y-2 text-sm">
                          <p><strong>Самовывоз:</strong> Visa, MasterCard, МИР</p>
                          <p><strong>Терминал:</strong> В центре слухопротезирования</p>
                          <p className="text-green-600 font-semibold">Комиссия: Нет</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover-scale">
                      <CardContent className="pt-6 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon name="Banknote" className="text-primary" size={32} />
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Наличными</h4>
                        <p className="text-muted-foreground mb-4">
                          Оплата наличными при получении заказа.
                        </p>
                        <div className="text-left space-y-2 text-sm">
                          <p><strong>Самовывоз:</strong> В кассу центра</p>
                          <p><strong>Курьеру:</strong> При доставке</p>
                          <p className="text-green-600 font-semibold">Комиссия: Нет</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="hover-scale">
                      <CardContent className="pt-6 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon name="FileCheck" className="text-primary" size={32} />
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Электронные сертификаты</h4>
                        <p className="text-muted-foreground mb-4">
                          Прием электронных сертификатов от Социального фонда России.
                        </p>
                        <div className="text-left space-y-2 text-sm">
                          <p><strong>Тип:</strong> Электронные сертификаты СФР</p>
                          <p><strong>Оформление:</strong> В магазине с консультантом</p>
                          <p><strong>Документы:</strong> Паспорт, сертификат</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="contacts" className="animate-fade-in">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
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