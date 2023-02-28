import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchPet from "../fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

const Details = () => {
  const { id } = useParams();
  // cache key = details, if not in cache call fetchPets
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
      <Carousel images={pet.images} />
      <h1>{pet.name}</h1>
      <h2>
        {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
        <p>{pet.description}</p>
        <button>Adopt {pet.name}</button>
      </h2>
    </div>
  );
};

// only catches errors from components that are inside of it
function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
