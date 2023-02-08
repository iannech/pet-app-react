import { useState } from "react";

const ANIMALS = ["bird", "reptile", "rabbit", "cat", "dog"]
const breeds = ["poodle"];

const SearchParams = () => {
    // setState Hook
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    return(
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input 
                        onChange={(e) => setLocation(e.target.value)}
                        id="location" 
                        value={location} 
                        placeholder="Location"/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select 
                        id="animal"
                        value={animal}
                        onChange = {(e) => {
                            setAnimal(e.target.value)
                            setBreed("")}}>
                        <option/>
                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        disabled={breeds.length === 0} // disable if breeds is 0
                        onChange = {(e) => {setBreed(e.target.value)}}>
                            <option/>
                                {breeds.map((breed) => (<option key={breed}>{breed}</option>))}
                        </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;