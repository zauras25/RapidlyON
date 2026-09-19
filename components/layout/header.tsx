import { Container } from "@/design-system";

import { DesktopNav } from "./desktop-nav";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="relative z-50 border-b border-neutral-200 bg-white">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-6">
          <Logo />

          <DesktopNav />

          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
