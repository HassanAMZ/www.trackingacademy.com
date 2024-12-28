import { Card } from '@/components/ui/card';
import Container from '@/components/ui/container';
import Text from '@/components/ui/text';

interface ProblemAwarenessProps {
  headingText?: string;
  paragraphText?: string;
  points?: string[];
  secondaryHeadingText?: string;
  secondaryParagraphText?: string;
  secondaryListItems?: string[];
}

const ProblemAwareness: React.FC<ProblemAwarenessProps> = ({
  headingText,
  paragraphText,
  points,
  secondaryHeadingText,
  secondaryParagraphText,
  secondaryListItems,
}) => {
  return (
    <section className="min-h-screen place-content-center overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <Container className="items-left flex !max-w-5xl flex-col justify-center space-y-8 py-12 text-left">
        {headingText && (
          <Text as="h2" variant="heading2xl">
            {headingText}
          </Text>
        )}

        {paragraphText && (
          <Text as="p" variant="headingMd" className="text-muted-foreground">
            {paragraphText}
          </Text>
        )}

        {points && points.length > 0 && (
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {points.map((point, index) => (
              <Card key={index} className="p-6">
                <Text as="p">{point}</Text>
              </Card>
            ))}
          </div>
        )}

        {secondaryHeadingText && (
          <div className="space-y-8 pt-8">
            <Text as="h2" variant="heading2xl">
              {secondaryHeadingText}
            </Text>

            {secondaryParagraphText && (
              <Text as="p" variant="headingMd" className="text-muted-foreground">
                {secondaryParagraphText}
              </Text>
            )}

            {secondaryListItems && secondaryListItems.length > 0 && (
              <div className="mb-12 grid gap-8 md:grid-cols-3">
                {secondaryListItems.map((item, index) => (
                  <Card key={index} className="p-6 bg-muted">
                    <Text as="p" className="text-muted-foreground">
                      {item}
                    </Text>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProblemAwareness;
