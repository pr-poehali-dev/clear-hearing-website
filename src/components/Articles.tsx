import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Article } from '@/types';

interface ArticlesProps {
  articles: Article[];
}

export const Articles = ({ articles }: ArticlesProps) => {
  const publishedArticles = articles.filter(article => article.published && article.type === 'blog');
  
  return (
    <div className="py-12 px-4 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center animate-scale-in">Статьи</h2>
        
        {publishedArticles.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <Icon name="BookOpen" className="text-muted-foreground mx-auto mb-4" size={64} />
            <p className="text-xl text-muted-foreground">
              Статьи пока не добавлены. Их можно добавить через админ-панель.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {publishedArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className="hover:shadow-lg transition-shadow hover-scale animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line line-clamp-4">
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
