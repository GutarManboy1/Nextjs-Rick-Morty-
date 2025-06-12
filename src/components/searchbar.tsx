// components/Searchbar.tsx
"use client";

import { Input } from "@/components/ui/input";
import { useSearch } from "@/context/SearchContext"; // ← Import context

type SearchbarProps = {
  placeholder: string;
};

export const Searchbar = ({ placeholder }: SearchbarProps) => {
  const { search, setSearch } = useSearch(); // ← Access context

  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
        className="w-full h-10 text-center placeholder:text-center"
      />
    </div>
  );
};
