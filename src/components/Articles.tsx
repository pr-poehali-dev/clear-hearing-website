import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Article } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';

interface ArticlesProps {
  articles: Article[];
}

export const Articles = ({ articles }: ArticlesProps) => {
  const publishedArticles = articles.filter(article => article.published && article.type === 'blog');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  
  return (
    <div className="py-12 sm:py-16 px-4 animate-fade-in bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 sm:mb-12 text-center animate-scale-in tracking-tight">Статьи</h2>
        
        {publishedArticles.length === 0 ? (
          <div className="text-center py-12 sm:py-20 animate-fade-in">
            <Icon name="BookOpen" className="text-muted-foreground mx-auto mb-4" size={48} />
            <p className="text-base sm:text-xl text-muted-foreground px-4">
              Статьи пока не добавлены. Их можно добавить через админ-панель.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {publishedArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className="hover:shadow-2xl transition-all duration-300 border-border/50 animate-fade-in cursor-pointer group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedArticle(article)}
              >
                <CardHeader className="p-6 pb-4">
                  <CardTitle className="text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">{article.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line line-clamp-4 mb-4">
                    {article.description}
                  </p>
                  <Button variant="ghost" className="mt-2 w-full group-hover:bg-accent/80 transition-colors" onClick={(e) => { e.stopPropagation(); setSelectedArticle(article); }}>
                    <Icon name="BookOpen" size={18} className="mr-2" />
                    Читать полностью
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedArticle?.title}</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              {selectedArticle?.date && new Date(selectedArticle.date).toLocaleDateString('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-foreground leading-relaxed whitespace-pre-line">
              {selectedArticle?.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};