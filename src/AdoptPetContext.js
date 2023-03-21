// be very judacious on how you use Context
// don't misuse if you don't need to avoid anti-pattern
import { createContext } from "react";

// this context will help us know which pet we've chosen to adopt
const AdoptedPetContext = createContext();

export default AdoptedPetContext;
