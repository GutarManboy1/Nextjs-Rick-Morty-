"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SearchbarProps = {
  placeholder: string;
   value: string;
  onChange: (value: string) => void;
};

export const Searchbar = ({ placeholder, value, onChange }: SearchbarProps) => {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="search" placeholder={placeholder} onChange={(e) => onChange(e.target.value)} className="w-full h-10 text-center placeholder:text-center"/>
      {/* <Button type="submit" variant="outline">
        Search
      </Button> */}
    </div>
  );
};
