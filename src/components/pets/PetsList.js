import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets, type }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
      {type === "cat" && (
          // Show only cats
          <>
            {cats.map((cat) => (
              <Pet key={cat.id} kind="cat" pet={cat} />
            ))}
          </>
        )}
        {type === "dog" && (
          // Show only dogs
          <>
            {dogs.map((dog) => (
              <Pet key={dog.id} kind="dog" pet={dog} />
            ))}
          </>
        )}
        {type === "pets" && (
          // Show only dogs
          <>
            {pets.map((pet) => (
              <Pet key={pet.id} kind={pet.kind.toLowerCase()} pet={pet} />
            ))}
          </>
        )}
      </section>
    </section>
  );
};

export default PetsList;
