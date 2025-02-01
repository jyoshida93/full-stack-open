export default function Filter(props) {
  return (
    <div>
      filter shown with{" "}
      <input
        type="text"
        value={props.searchValue}
        onChange={props.updateSearchValue}
      />
    </div>
  );
}
