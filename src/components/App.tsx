import Card from "./Card";

function App() {
  return (
    <section>
      <div className="flex items-center justify-center min-h-screen bg-slate-800">
        <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
          <Card type="Basic" storage="100GB" price="$1.99/Month" featureA="100 GB of storage" featureB="Option to add members" featureC="Extra member benefits" />
          <Card type="Standard" storage="200GB" price="$3.99/Month" featureA="200 GB of storage" featureB="Option to add members" featureC="Extra member benefits" />
          <Card type="Premium" storage="2TB" price="$8.99/Month" featureA="2 TB of storage" featureB="Option to add members" featureC="Extra member benefits" />
        </div>
      </div>
    </section>
  );
}

export default App;
