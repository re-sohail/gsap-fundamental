"use client";

import { Button } from "@/components/ui/button";
import BgLayout from "@/layouts/bg-layout";
import { useRouter } from "next/navigation";

const BUTTONS_INFO = [
  {
    label: "Gsap To",
    href: "/gsap/to",
    description: "Animate a property from its current value to a new value.",
    icon: "to",
  },
  {
    label: "Gsap From",
    href: "/gsap/from",
    description:
      "Animate a property from a starting value to its current value.",
    icon: "from",
  },
  {
    label: "Gsap From To",
    href: "/gsap/from-to",
    description: "Animate a property from a starting value to a new value.",
    icon: "from-to",
  },
  {
    label: "Gsap Timeline",
    href: "/gsap/timeline",
    description: "Animate a property over time using a timeline.",
    icon: "timeline",
  },
  {
    label: "Gsap ScrollTrigger",
    href: "/gsap/scroll-trigger",
    description: "Animate a property when the user scrolls.",
    icon: "scroll-trigger",
  },
];

export default function Home() {
  const router = useRouter();

  const handleButtonClick = (href: string) => {
    router.push(href);
  };

  return (
    <BgLayout>
      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="text-center space-y-10">
          {/* Title and description */}
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">
              Gsap Fundamentals
            </h1>
            <p className="text-base max-w-md mx-auto text-muted-foreground">
              Learn the fundamentals of Gsap and how to use it to create
              animations.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-2 justify-center">
            {BUTTONS_INFO.map((button) => (
              <Button
                variant="outline"
                key={button.label}
                onClick={() => handleButtonClick(button.href)}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
      </main>
    </BgLayout>
  );
}
