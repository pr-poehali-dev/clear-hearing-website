import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Article } from '@/types';

interface AboutProps {
  articles: Article[];
}

export const About = ({ articles }: AboutProps) => {
  return (
    <div className="py-12 px-4 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center">О компании</h2>
        
        {articles.length === 0 ? (
          <div className="text-center py-20">
            <Icon name="FileText" className="text-muted-foreground mx-auto mb-4" size={64} />
            <p className="text-xl text-muted-foreground">
              Информация пока не добавлена. Её можно добавить через админ-панель.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {articles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
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
