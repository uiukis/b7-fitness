import { Suspense } from "react";
import { units } from "utils/data";
import Header from "components/Header";
import LocationPage from "components/Location";
import UnitHome from "components/UnitHome";
import UnitModalities from "components/UnitModalities";
import Footer from "components/Footer";

export function generateStaticParams() {
  return units.map((unit) => ({ id: unit.id }));
}

export default async function UnitPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const unit = units.find((u) => u.id === id);

  if (!unit) {
    return (
      <p className="text-white text-center font-nexaBlack mt-20">
        Unidade não encontrada
      </p>
    );
  }

  return (
    <>
      <Header />
      <Suspense
        fallback={
          <p className="text-white text-center font-nexaBlack mt-20">
            Carregando...
          </p>
        }
      >
        <UnitHome unit={unit} />
        <UnitModalities unit={unit} />
        <LocationPage
          unit={{
            ...unit,
            position: [unit.position[0], unit.position[1]] as [number, number],
          }}
        />
      </Suspense>
      <Footer />
    </>
  );
}
