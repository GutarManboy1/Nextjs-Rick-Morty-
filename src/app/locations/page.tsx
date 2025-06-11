import { getLocations } from "@/actions/index";
import { Locationcards } from "@/components/locationcards";

export default async function LocationsPage() {
  const locations = await getLocations();

  return (
    <main className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {locations.map(({ id, name, dimension, residents}) => (
          <Locationcards
            key={id}
            id={id}
            name={name}
            dimension = { dimension}
            residents = {residents}
          />
        ))}
      </div>
    </main>
  );
}
