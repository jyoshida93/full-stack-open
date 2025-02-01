export default function PhoneNumberList(props) {
  return (
    <div>
      <h2>Numbers</h2>
      {props.filteredItems.map((person) => (
        <div key={person.name}>
          <span key={person.name}> {person.name} </span>
          <span key={person.number}> {person.number} </span>
        </div>
      ))}
    </div>
  );
}
