import BgImage from "@/components/shared/bg-image";

interface BgLayoutProps {
    children: React.ReactNode;
}

function BgLayout({ children }: BgLayoutProps) {
  return (
    <div className="relative w-full min-h-screen">
        {/* Background image layer */}
        <BgImage className="object-cover" />
        
        {/* Foreground content layer */}
        <div className="relative z-10">
            {children}
        </div>
    </div>
  );
}

export default BgLayout;