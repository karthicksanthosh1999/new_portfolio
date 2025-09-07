import React, { FC } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type TOptions = {
  name: string;
  value: string;
};

type TSelectProps = {
  placeholder?: string;
  label?: string;
  value?: string;
  onChange: () => void;
  options: TOptions[];
};

const SelectInput: FC<TSelectProps> = ({
  options,
  placeholder,
  label,
  onChange,
  value,
}) => {
  console.log(value);
  return (
    <Select value={value}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder ?? ""} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label ?? ""}</SelectLabel>
          {options &&
            options.map((item, idx) => (
              <SelectItem value={item.value} key={idx} onChange={onChange}>
                {item.name}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default SelectInput;
