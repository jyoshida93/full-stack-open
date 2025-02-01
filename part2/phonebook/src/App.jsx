import { useState } from "react";
import Filter from "./Filter";
import Form from "./Form";
import PhoneNumberList from "./PhoneNumberList";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
    { name: "Arno", number: "040-12345671" },
    { name: "Ari", number: "040-12345672" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const updateName = (event) => {
    setNewName(event.target.value);
  };
  const filteredItems = persons.filter((person) =>
    person.name.toLowerCase().startsWith(searchValue.toLowerCase())
  );
  const updateNumber = (event) => setNewNumber(event.target.value);
  const updateSearchValue = (event) => setSearchValue(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (persons.map((person) => person.name).includes(newName)) {
      alert(`${newName} is already included in the phonebook`);
    } else {
      setPersons((prev) => {
        const data = [...prev, { name: newName, number: newNumber }];
        return data;
      });
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchValue={searchValue}
        updateSearchValue={updateSearchValue}
      ></Filter>
      <Form
        newName={newName}
        newNumber={newNumber}
        updateName={updateName}
        updateNumber={updateNumber}
        onSubmit={onSubmit}
      ></Form>
      <PhoneNumberList filteredItems={filteredItems}></PhoneNumberList>
    </div>
  );
};

export default App;
