import CategoryCard from "../../components/g3-components/filtro/index.jsx";
import {
  CardWrapper,
  Filter,
  Info,
  Main,
  Title,
  WrapperContent,
} from "./style.js";
import Header from "../../components/g3-components/header/index.jsx";
import Footer from "../../components/g3-components/footer/index.jsx";
import SectionPet from "../../components/g3-components/sectionPet/index.jsx";
import { useState, useEffect } from "react";
import InputComponent from "../../components/g3-components/input/index.jsx";
import DonationCard from "../../components/g3-components/card/index.jsx";
import SectionPetNotFound from "../../components/g3-components/sectionPetNotfound/index.jsx";

const STATUS = {
  IDLE: "idle",
  SUCCESS: "success",
  ERROR: "error",
};

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [pets, setPets] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const filters = [
    { emoji: "🐈", label: "Gatos", value: "cat", type: "species" },
    { emoji: "🦮", label: "Cachorros", value: "dog", type: "species" },
    { emoji: "🐒", label: "macacos", value: "monkey", type: "species" },
    { emoji: "🐾", label: "Filhotes", value: "filhote", type: "age" },
    { emoji: "📍", label: "+Proximos", value: "proximos", type: "location" },
  ];

  const fetchData = async () => {
    try {
      if (pets.length === 0) {
        const res = await fetch(
          "https://grupo3apiconsume-h8hqg6f8h7dsh2ae.chilecentral-01.azurewebsites.net/donations",
        );
        if (!res.ok) throw new Error("Erro na requisição");
        const data = await res.json();
        setPets(data);
      }
      setStatus(STATUS.SUCCESS);
    } catch (err) {
      setStatus(STATUS.ERROR);
    }
  };

  const handleSearch = () => {
    if (!query.trim()) return;
    setSearchTerm(query);
    fetchData();
  };

  useEffect(() => {
    if (selectedSpecies || selectedFilter) {
      fetchData();
    }
  }, [selectedSpecies, selectedFilter]);

  console.log("selectedSpecies:", JSON.stringify(selectedSpecies));

  const filtered = pets.filter((pet) => {
    const search = searchTerm.toLocaleLowerCase().trim();

    const numberTerm = Number(search);

    const isNumber = !isNaN(numberTerm);

    const matchYears =
      isNumber &&
      pet.ageMonths >= numberTerm * 12 &&
      pet.ageMonths < (numberTerm + 1) * 12;

    const matchSpecies =
      selectedSpecies === "" ||
      pet.species.toLocaleLowerCase() === selectedSpecies.toLocaleLowerCase();

    const matchSearch =
      search == "" ||
      pet.name?.toLocaleLowerCase().includes(search) ||
      pet.breed?.toLocaleLowerCase().includes(search) ||
      pet.species?.toLocaleLowerCase().includes(search) ||
      pet.size?.toLocaleLowerCase().includes(search) ||
      pet.description?.toLocaleLowerCase().includes(search);

    const matchFilhote = selectedFilter !== "filhote" || pet.ageMonths <= 12;

    return (
      (matchSearch || matchYears || (search === "" && matchFilhote)) &&
      matchSpecies &&
      matchFilhote
    );
  });

  return (
    <Main>
      <Header />
      <WrapperContent $status={status}>
        <Info>
          {status === STATUS.IDLE && (
            <div>
              <Title>O que esta procurando? </Title>

              <Filter>
                {filters.map((filter) => (
                  <CategoryCard
                    key={filter.value}
                    id={filter.value}
                    emoji={filter.emoji}
                    label={filter.label}
                    key={filter.value}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (filter.type === "species") {
                        setSelectedSpecies(
                          selectedSpecies === filter.value ? "" : filter.value,
                        );
                      } else {
                        setSelectedFilter(
                          selectedFilter === filter.value ? "" : filter.value,
                        );
                      }
                    }}
                    $status={status}
                  />
                ))}
              </Filter>
            </div>
          )}

          <InputComponent
            $status={status}
            input={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            onSearch={handleSearch}
          />
        </Info>

        {status === STATUS.IDLE && <SectionPet />}

        {status === STATUS.SUCCESS && (
          <>
            {filtered.length === 0 ? (
              <SectionPetNotFound />
            ) : (
              <CardWrapper>
                {filtered.map((pet, index) => (
                  <DonationCard
                    key={pet.id || index}
                    url={pet.url}
                    name={pet.name}
                    size={pet.size}
                    breed={pet.breed}
                    species={pet.species}
                  />
                ))}
              </CardWrapper>
            )}
          </>
        )}
      </WrapperContent>

      <Footer />
    </Main>
  );
}
