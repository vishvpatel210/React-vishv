import { Card } from "./Card";

export const CardList = () => {
  const students = [
    { name: "Jonty Patel", age: 19, course: "B.Tech", city: "Vadodara" },
    { name: "vishv patel", age: 19, course: "BBA", city: "unjha" },
    { name: "jal Gupta", age: 22, course: "MCA", city: "Mumbai" },
  ];

  return (
    <>
      {students.map((user) => (
        <Card
          name={user.name}
          age={user.age}
          course={user.course}
          city={user.city}
        />
      ))}
    </>
  );
};
