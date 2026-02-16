import Data from "../api/Data.json";

const Loop = () => {
    return (
        <>
            {Data.map((element) => (
                <div key={element.id}>
                    <h1>{element.id}</h1>
                    <h1>{element.name}</h1>
                </div>
            ))}
        </>
    );
};

export default Loop;
