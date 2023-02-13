import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchPet from "../FetchPet";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <h1>{pet.name}</h1>
      <h2>
        {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
        <p>{pet.description}</p>
        <button>Adopt {pet.name}</button>
      </h2>
    </div>
  );
};

export default Details;
