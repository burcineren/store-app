"use client";
import React, { useEffect } from "react";
import { actionFunction } from "@/utils/types";
import { useToast } from "@/hooks/use-toast";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = React.useActionState(action, initialState);
  const { toast } = useToast();
  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
