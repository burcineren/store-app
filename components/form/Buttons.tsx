"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";

type btnSize = "default" | "lg" | "sm";

type submitButtonProps = {
  className?: string;
  size?: btnSize;
  text?: string;
};
function SubmitButton({
  className = "",
  text = "submit",
  size = "lg",
}: submitButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className={cn("capitalize", className)}
      disabled={pending}
    >
      {pending ? (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

export default SubmitButton;
