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
      <section className="py-16 sm:py-24 px-4 bg-gradient-to-br from-primary/10 via-white to-accent/10 animate-fade-in">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-5 sm:mb-7 text-foreground animate-scale-in leading-tight tracking-tight">
            Верните радость слышать мир
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>Современные слуховые аппараты высокого качества. Индивидуальный подбор, настройка и сервисное обслуживание.</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              onClick={() => onNavigate('catalog')}
              className="bg-primary hover:bg-primary/90 text-base px-8 py-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            >
              Смотреть каталог
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate('services')}
              className="text-base px-8 py-6 rounded-xl font-medium border-2 hover:bg-accent/50 transition-all w-full sm:w-auto"
            >
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="delivery" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8">
              <TabsTrigger value="delivery" className="text-sm sm:text-base md:text-lg">Доставка и оплата</TabsTrigger>
              <TabsTrigger value="contacts" className="text-sm sm:text-base md:text-lg">Контакты</TabsTrigger>
            </TabsList>

            <TabsContent value="delivery" className="animate-fade-in">
              <div className="space-y-8 sm:space-y-12">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Доставка</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    <Card className="hover-scale">
                      <CardContent className="pt-6 text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon name="Package" className="text-primary" size={32} />
                        </div>
                        <h4 className="text-xl font-semibold mb-3">Самовывоз</h4>
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