export default function Form(props) {
  return (
    <div>
      <h2>Add New Contact</h2>
      <form onSubmit={props.onSubmit}>
        <div>
          name: <input value={props.newName} onChange={props.updateName} />
        </div>
        <div>
          number:{" "}
          <input value={props.newNumber} onChange={props.updateNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}
