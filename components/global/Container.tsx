import { cn } from "@/lib/utils";

function Container({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-6xl x:max-w-7xl px-8", className)}>
      {children}
    </div>
  );
}

export default Container;
