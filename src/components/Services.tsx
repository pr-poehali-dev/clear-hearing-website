import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Service } from '@/types';

interface ServicesProps {
  services: Service[];
  onNavigateToAppointment?: () => void;
}

export const Services = ({ services, onNavigateToAppointment }: ServicesProps) => {
  return (
    <div className="py-12 sm:py-16 px-4 animate-fade-in bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-12 text-center animate-scale-in tracking-tight">Наши услуги</h2>
        
        {services.length === 0 ? (
          <div className="text-center py-12 sm:py-20 animate-fade-in">
            <Icon name="Wrench" className="text-muted-foreground mx-auto mb-4" size={48} />
            <p className="text-base sm:text-xl text-muted-foreground px-4">
              Услуги пока не добавлены. Их можно добавить через админ-панель.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="hover:shadow-2xl transition-all duration-300 border-border/50 animate-fade-in overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="w-full h-56 bg-muted overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    {service.imageUrl ? (
                      <img
                        src={service.imageUrl}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon name="Image" className="text-muted-foreground" size={56} />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <CardTitle className="text-2xl font-semibold mb-2 tracking-tight">{service.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{service.contact}</CardDescription>
                  </div>
                </CardHeader>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button
                    className="w-full rounded-lg py-6 font-medium shadow-md hover:shadow-lg transition-all"
                    onClick={() => {
                      if (onNavigateToAppointment) {
                        onNavigateToAppointment();
                      } else if (service.link) {
                        window.open(service.link, '_blank');
                      }
                    }}
                  >
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