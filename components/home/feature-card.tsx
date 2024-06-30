import { FC } from 'react';
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from '../ui/dialog';
import TypographyH3 from '../ui/typography-h3';
import TypographyP from '../ui/typography-p';

interface FeatureCardPorps {
 icon: React.ReactElement;
 title: string;
 description: string;
 dialogTitle: string;
 dialogDescription: string;
}

const FeatureCard: FC<FeatureCardPorps> = ({
 icon,
 title,
 description,
 dialogTitle,
 dialogDescription,
}) => {
 return (
  <Dialog>
   <DialogTrigger asChild>
    <div className='flex flex-col items-center p-6 border rounded-lg shadow-sm cursor-pointer'>
     {icon}
     <TypographyH3 className='text-primary mb-2 '>{title}</TypographyH3>
     <TypographyP applyMargin={false}>{description}</TypographyP>
    </div>
   </DialogTrigger>
   <DialogContent className='sm:max-w-md'>
    <DialogHeader>
     <DialogTitle>{dialogTitle}</DialogTitle>
     <DialogDescription>{dialogDescription}</DialogDescription>
    </DialogHeader>
   </DialogContent>
  </Dialog>
 );
};

export default FeatureCard;
