import Part from "./Part";
const Content = (props) => {
  return (
    <>
      <Part course={props.parts[0]}></Part>
      <Part course={props.parts[1]}></Part>
      <Part course={props.parts[2]}></Part>
    </>
  );
};

export default Content;
