import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Product, Service, Article, SiteData } from '@/types';
import { loadData, saveData, exportData, importData } from '@/utils/storage';
import { toast } from 'sonner';

interface AdminProps {
  onClose: () => void;
}

export const Admin = ({ onClose }: AdminProps) => {
  const [data, setData] = useState<SiteData>(loadData());
  const [newProduct, setNewProduct] = useState<Partial<Product>>({});
  const [newService, setNewService] = useState<Partial<Service>>({});
  const [newArticle, setNewArticle] = useState<Partial<Article>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setData(loadData());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      toast.error('Заполните название и цену');
      return;
    }
    const product: Product = {
      id: Date.now().toString(),
      name: newProduct.name,
      imageUrl: newProduct.imageUrl || '',
      price: Number(newProduct.price),
      description: newProduct.description || '',
      specs: newProduct.specs || '',
    };
    const updatedData = { ...data, products: [...data.products, product] };
    saveData(updatedData);
    setData(updatedData);
    setNewProduct({});
    toast.success('Товар добавлен');
  };

  const handleDeleteProduct = (id: string) => {
    const updatedData = { ...data, products: data.products.filter(p => p.id !== id) };
    saveData(updatedData);
    setData(updatedData);
    toast.success('Товар удалён');
  };

  const handleAddService = () => {
    if (!newService.name) {
      toast.error('Заполните название услуги');
      return;
    }
    const service: Service = {
      id: Date.now().toString(),
      name: newService.name,
      imageUrl: newService.imageUrl || '',
      contact: newService.contact || '',
      link: newService.link || '',
    };
    const updatedData = { ...data, services: [...data.services, service] };
    saveData(updatedData);
    setData(updatedData);
    setNewService({});
    toast.success('Услуга добавлена');
  };

  const handleDeleteService = (id: string) => {
    const updatedData = { ...data, services: data.services.filter(s => s.id !== id) };
    saveData(updatedData);
    setData(updatedData);
    toast.success('Услуга удалена');
  };

  const handleAddArticle = () => {
    if (!newArticle.title || !newArticle.description) {
      toast.error('Заполните название и описание');
      return;
    }
    const article: Article = {
      id: Date.now().toString(),
      title: newArticle.title,
      description: newArticle.description,
      published: false,
    };
    const updatedData = { ...data, articles: [...data.articles, article] };
    saveData(updatedData);
    setData(updatedData);
    setNewArticle({});
    toast.success('Статья добавлена');
  };

  const handleDeleteArticle = (id: string) => {
    const updatedData = { ...data, articles: data.articles.filter(a => a.id !== id) };
    saveData(updatedData);
    setData(updatedData);
    toast.success('Статья удалена');
  };

  const handleTogglePublish = (id: string) => {
    const updatedData = {
      ...data,
      articles: data.articles.map(a =>
        a.id === id ? { ...a, published: !a.published } : a
      ),
    };
    saveData(updatedData);
    setData(updatedData);
    const article = updatedData.articles.find(a => a.id === id);
    toast.success(article?.published ? 'Статья опубликована' : 'Статья снята с публикации');
  };

  const handleExport = () => {
    const dataStr = exportData();
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'yasniy-sluh-data.json';
    link.click();
    toast.success('Данные экспортированы');
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (importData(content)) {
        setData(loadData());
        toast.success('Данные импортированы');
      } else {
        toast.error('Ошибка импорта данных');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 bg-background z-50 overflow-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Админ-панель</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleExport}>
              <Icon name="Download" size={18} className="mr-2" />
              Экспорт
            </Button>
            <label>
              <Button variant="outline" asChild>
                <span>
                  <Icon name="Upload" size={18} className="mr-2" />
                  Импорт
                </span>
              </Button>
              <input type="file" accept=".json" onChange={handleImport} className="hidden" />
            </label>
            <Button onClick={onClose}>
              <Icon name="X" size={18} className="mr-2" />
              Закрыть
            </Button>
          </div>
        </div>

        <Tabs defaultValue="catalog" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="catalog">Каталог</TabsTrigger>
            <TabsTrigger value="services">Услуги</TabsTrigger>
            <TabsTrigger value="about">О компании</TabsTrigger>
          </TabsList>

          <TabsContent value="catalog" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Добавить товар</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input
                  placeholder="Название"
                  value={newProduct.name || ''}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
                <Input
                  placeholder="URL картинки"
                  value={newProduct.imageUrl || ''}
                  onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
                />
                <Input
                  type="number"
                  placeholder="Цена"
                  value={newProduct.price || ''}
                  onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                />
                <Textarea
                  placeholder="Описание"
                  value={newProduct.description || ''}
                  onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                />
                <Textarea
                  placeholder="Характеристики"
                  value={newProduct.specs || ''}
                  onChange={(e) => setNewProduct({ ...newProduct, specs: e.target.value })}
                />
                <Button onClick={handleAddProduct} className="w-full">
                  <Icon name="Plus" size={18} className="mr-2" />
                  Добавить товар
                </Button>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              {data.products.map((product) => (
                <Card key={product.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {product.name}
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{product.price} ₽</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Добавить услугу</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input
                  placeholder="Название"
                  value={newService.name || ''}
                  onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                />
                <Input
                  placeholder="URL картинки"
                  value={newService.imageUrl || ''}
                  onChange={(e) => setNewService({ ...newService, imageUrl: e.target.value })}
                />
                <Input
                  placeholder="Как связаться"
                  value={newService.contact || ''}
                  onChange={(e) => setNewService({ ...newService, contact: e.target.value })}
                />
                <Input
                  placeholder="Ссылка для записи"
                  value={newService.link || ''}
                  onChange={(e) => setNewService({ ...newService, link: e.target.value })}
                />
                <Button onClick={handleAddService} className="w-full">
                  <Icon name="Plus" size={18} className="mr-2" />
                  Добавить услугу
                </Button>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              {data.services.map((service) => (
                <Card key={service.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {service.name}
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteService(service.id)}
                      >
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="about" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Добавить статью</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input
                  placeholder="Название статьи"
                  value={newArticle.title || ''}
                  onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                />
                <Textarea
                  placeholder="Описание"
                  rows={6}
                  value={newArticle.description || ''}
                  onChange={(e) => setNewArticle({ ...newArticle, description: e.target.value })}
                />
                <Button onClick={handleAddArticle} className="w-full">
                  <Icon name="Plus" size={18} className="mr-2" />
                  Добавить статью
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {data.articles.map((article) => (
                <Card key={article.id} className={article.published ? 'border-primary' : ''}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between gap-2">
                      <span className="flex-1">{article.title}</span>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant={article.published ? "default" : "outline"}
                          onClick={() => handleTogglePublish(article.id)}
                        >
                          <Icon name={article.published ? "Eye" : "EyeOff"} size={16} className="mr-1" />
                          {article.published ? "Опубликовано" : "Черновик"}
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeleteArticle(article.id)}
                        >
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};