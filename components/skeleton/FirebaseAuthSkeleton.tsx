import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const FirebaseAuthSkeleton = () => {
  return (
    <section className="py-2">
      <Card className="bg-secondary rounded-t-lg">
        <CardContent className="flex h-[30vh] flex-col items-center justify-center gap-2">
          <Skeleton className="h-4 w-[250px]" />
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <Skeleton className="h-12 w-[200px] rounded-lg" />
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="relative h-8 w-8 pt-4">
                <Skeleton className="absolute top-0 left-0 h-8 w-8 rounded-full" />
                <Skeleton className="absolute top-0 left-4 h-8 w-8 rounded-full" />
                <Skeleton className="absolute top-0 left-8 h-8 w-8 rounded-full" />
              </div>
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
