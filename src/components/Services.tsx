import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Service } from '@/types';

interface ServicesProps {
  services: Service[];
}

export const Services = ({ services }: ServicesProps) => {
  return (
    <div className="py-12 px-4 animate-fade-in">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center animate-scale-in">Наши услуги</h2>
        
        {services.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <Icon name="Wrench" className="text-muted-foreground mx-auto mb-4" size={64} />
            <p className="text-xl text-muted-foreground">
              Услуги пока не добавлены. Их можно добавить через админ-панель.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="hover:shadow-lg transition-all hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-full h-48 bg-accent rounded-md mb-4 overflow-hidden">
                    {service.imageUrl ? (
                      <img
                        src={service.imageUrl}
                        alt={service.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon name="Image" className="text-muted-foreground" size={48} />
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-sm">{service.contact}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    className="w-full"
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    <Icon name="Calendar" size={18} className="mr-2" />
                    Записаться на приём
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};