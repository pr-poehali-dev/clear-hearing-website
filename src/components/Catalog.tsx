import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Product } from '@/types';

interface CatalogProps {
  products: Product[];
  onNavigateToAppointment?: () => void;
}

export const Catalog = ({ products, onNavigateToAppointment }: CatalogProps) => {
  return (
    <div className="py-12 sm:py-16 px-4 animate-fade-in bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-12 text-center animate-scale-in tracking-tight">Каталог</h2>
        
        {products.length === 0 ? (
          <div className="text-center py-12 sm:py-20 animate-fade-in">
            <Icon name="Package" className="text-muted-foreground mx-auto mb-4" size={48} />
            <p className="text-base sm:text-xl text-muted-foreground px-4">
              Каталог пока пуст. Товары можно добавить через админ-панель.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="hover:shadow-2xl transition-all duration-300 border-border/50 animate-fade-in overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="w-full h-56 bg-muted overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Icon name="Image" className="text-muted-foreground" size={56} />
                    )}
                  </div>
                  <div className="p-5 pb-3">
                    <CardTitle className="text-xl font-semibold mb-2 tracking-tight">{product.name}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-primary">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="px-5 pb-5">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                  {product.specs && (
                    <div className="bg-muted/70 p-4 rounded-lg border border-border/30">
                      <p className="text-xs font-semibold mb-2 text-foreground">Характеристики:</p>
                      <p className="text-xs text-muted-foreground whitespace-pre-line leading-relaxed">{product.specs}</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="p-5 pt-0">
                  <Button className="w-full rounded-lg py-6 font-medium shadow-md hover:shadow-lg transition-all" onClick={onNavigateToAppointment}>
                    Заказать
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