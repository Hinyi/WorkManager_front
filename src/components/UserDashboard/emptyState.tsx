import { Card, CardContent } from "../ui/card";

export function EmptyState({ title }: { title: string }) {
  return (
    <Card className="h-full">
      <CardContent className="flex h-full items-center justify-center text-muted-foreground min-w-120">
        {title} – coming soon
      </CardContent>
    </Card>
  );
}
