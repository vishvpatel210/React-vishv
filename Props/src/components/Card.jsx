export const Card = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.course}</p>
      <p>{props.city}</p>
    </>
  );
};

