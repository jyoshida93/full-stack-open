const IncrementButton = ({ state, setter, text }) => {
  const incrementState = () => setter(state + 1);
  return <button onClick={incrementState}>{text}</button>;
};

export default IncrementButton;
