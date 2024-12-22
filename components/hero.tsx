import YoutubeEmbed from '@/components/global/youtube-embed';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import Text from '@/components/ui/text';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
  badgeText?: string;
  headingText?: string;
  subheadingText?: string;
  buttonText?: string;
  buttonLink?: string;
  youtubeEmbedId?: string;
}

const Hero: React.FC<HeroProps> = ({
  badgeText,
  headingText,
  subheadingText,
  buttonText,
  buttonLink,
  youtubeEmbedId,
}) => {
  return (
    <section className="grid min-h-screen place-content-center overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <Container className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
        {badgeText && <Badge variant="outline">{badgeText}</Badge>}
        {headingText && (
          <Text as="h1" variant="heading3xl" className="max-w-4xl">
            {headingText}
          </Text>
        )}
        {subheadingText && (
          <Text as="h2" variant="headingMd" className="max-w-3xl text-muted-foreground">
            {subheadingText}
          </Text>
        )}

        {buttonText && buttonLink && (
          <div className="flex items-center space-x-4">
            <Button size="lg" asChild>
              <Link href={buttonLink}>
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}

        {youtubeEmbedId && <YoutubeEmbed embedId={youtubeEmbedId} />}
      </Container>
    </section>
  );
};

export default Hero;
