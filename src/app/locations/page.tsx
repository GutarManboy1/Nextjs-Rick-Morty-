"use client";

import { useEffect, useState } from "react";
import { getLocations } from "@/actions/index";
import { Locationcards } from "@/components/locationcards";
import { Navbar } from "@/components/navbar";
import { Searchbar } from "@/components/searchbar";

export default function LocationsPage() {
  const [locations, setLocations] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await getLocations();
      setLocations(data);
    };

    fetchLocations();
  }, []);

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <Navbar />
        <Searchbar
          placeholder="Search for a Location"
          value={search}
          onChange={setSearch}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredLocations.map(({ id, name, dimension, residents }) => (
          <Locationcards
            key={id}
            id={id}
            name={name}
            dimension={dimension}
            residents={residents}
          />
        ))}
      </div>
    </main>
  );
}
