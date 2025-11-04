import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Product } from '@/types';

interface CatalogProps {
  products: Product[];
}

export const Catalog = ({ products }: CatalogProps) => {
  return (
    <div className="py-12 px-4 animate-fade-in">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center animate-scale-in">Каталог слуховых аппаратов</h2>
        
        {products.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <Icon name="Package" className="text-muted-foreground mx-auto mb-4" size={64} />
            <p className="text-xl text-muted-foreground">
              Каталог пока пуст. Товары можно добавить через админ-панель.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="hover:shadow-lg transition-all hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-full h-48 bg-accent rounded-md mb-4 overflow-hidden flex items-center justify-center">
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <Icon name="Image" className="text-muted-foreground" size={48} />
                    )}
                  </div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                  {product.specs && (
                    <div className="bg-accent/50 p-3 rounded-md">
                      <p className="text-xs font-semibold mb-1">Характеристики:</p>
                      <p className="text-xs text-muted-foreground whitespace-pre-line">{product.specs}</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
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