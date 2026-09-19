import {
  Eyebrow,
  Heading,
  Text,
} from "@/design-system";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={[
        "max-w-3xl",
        centered ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

      <Heading
        as="h2"
        size="h2"
        className="mt-4"
      >
        {title}
      </Heading>

      {description && (
        <Text
          size="large"
          muted
          className="mt-6 max-w-2xl"
        >
          {description}
        </Text>
      )}
    </div>
  );
}
