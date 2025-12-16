import { Card, CardContent } from "../ui/card";

export function EmptyState({ title }: { title: string }) {
  return (
    <Card className="h-full">
      <CardContent className="flex justify-center text-muted-foreground ">
        {title} – coming soon
      </CardContent>
    </Card>
  );
}
