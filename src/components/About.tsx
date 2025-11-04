import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Article } from '@/types';

interface AboutProps {
  articles: Article[];
}

export const About = ({ articles }: AboutProps) => {
  const publishedArticles = articles.filter(article => article.published && article.type === 'about');
  
  return (
    <div className="py-8 sm:py-12 px-4 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center animate-scale-in">О компании</h2>
        
        {publishedArticles.length === 0 ? (
          <div className="text-center py-12 sm:py-20 animate-fade-in">
            <Icon name="FileText" className="text-muted-foreground mx-auto mb-4" size={48} />
            <p className="text-base sm:text-xl text-muted-foreground px-4">
              Информация пока не добавлена. Её можно добавить через админ-панель.
            </p>
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-6">
            {publishedArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className="hover:shadow-lg transition-shadow hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {article.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};