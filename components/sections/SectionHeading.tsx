import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/typography/Heading';
import { Text } from '@/components/typography/Text';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignment =
    align === 'center'
      ? 'mx-auto text-center'
      : '';

  return (
    <div
      className={[
        'max-w-3xl',
        alignment,
        className,
      ].join(' ')}
    >
      {eyebrow && (
        <Eyebrow>{eyebrow}</Eyebrow>
      )}

      <Heading
        size="lg"
        className="mt-3 text-balance"
      >
        {title}
      </Heading>

      {description && (
        <Text
          size="lg"
          muted
          className="mt-5 max-w-2xl text-pretty"
        >
          {description}
        </Text>
      )}
    </div>
  );
}
