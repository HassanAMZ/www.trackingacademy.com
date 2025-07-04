import { FC } from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

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
        <div className="flex cursor-pointer flex-col items-center rounded-lg border p-6 shadow-sm">
          {icon}
          <h3 className="text-primary mb-2">{title}</h3>
          <p>{description}</p>
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
