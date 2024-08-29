import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Text from "@/components/ui/text";
import { cn } from "@/lib/utils";

interface FeatureCardPorps {
  icon: React.ReactElement;
  title: string;
  className?: string;
  description: string;
  dialogTitle: string;
  dialogDescription: string;
}

const FeatureCard: FC<FeatureCardPorps> = ({
  icon,
  title,
  className,
  description,
  dialogTitle,
  dialogDescription,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex cursor-pointer flex-col items-center rounded-lg border p-6 shadow">
          {icon}
          <Text as="h3" variant="headingXl" className="mb-2 text-primary">
            {title}
          </Text>
          <Text as="p" variant="bodyMd" applyMargin={false}>
            {description}
          </Text>
        </div>
      </DialogTrigger>
      <DialogContent className={cn(className, "sm:max-w-md")}>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FeatureCard;
