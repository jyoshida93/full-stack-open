const Part = (props) => {
  return (
    <p>
      {props.course.name} {props.course.exercises}
    </p>
  );
};

export default Part;
