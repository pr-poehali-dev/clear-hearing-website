import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Article } from '@/types';

interface AboutProps {
  articles: Article[];
}

export const About = ({ articles }: AboutProps) => {
  const publishedArticles = articles.filter(article => article.published && article.type === 'about');
  
  return (
    <div className="py-12 sm:py-16 px-4 animate-fade-in bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-12 text-center animate-scale-in tracking-tight">О компании</h2>
        
        {publishedArticles.length === 0 ? (
          <div className="text-center py-12 sm:py-20 animate-fade-in">
            <Icon name="FileText" className="text-muted-foreground mx-auto mb-4" size={48} />
            <p className="text-base sm:text-xl text-muted-foreground px-4">
              Информация пока не добавлена. Её можно добавить через админ-панель.
            </p>
          </div>
        ) : (
          <div className="space-y-6 sm:space-y-8">
            {publishedArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className="hover:shadow-2xl transition-all duration-300 border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-3xl font-semibold tracking-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-base">
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