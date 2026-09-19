import {
  Eyebrow,
  Heading,
  Text,
} from "@/design-system";

export function ProjectIntro() {
  return (
    <div className="max-w-2xl">
      <Eyebrow>Start a project</Eyebrow>

      <Heading
        as="h1"
        size="h1"
        className="mt-5"
      >
        Tell us what you&apos;re building.
      </Heading>

      <Text
        size="large"
        muted
        className="mt-6"
      >
        Give us a little context. We&apos;ll use it to understand the
        opportunity, ask the right questions, and shape the next conversation.
      </Text>
    </div>
  );
}
