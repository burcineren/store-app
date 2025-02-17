"use client";

import { Checkbox } from "@/components/ui/checkbox";

type CheckBoxInputProps = {
  name: string;
  label: string;
  defaultChecked?: boolean;
};
function CheckBoxInput({ name, label, defaultChecked }: CheckBoxInputProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox name={name} id={name} defaultChecked={defaultChecked} />
      <label
        htmlFor={name}
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
      >
        {label}
      </label>
    </div>
  );
}

export default CheckBoxInput;
