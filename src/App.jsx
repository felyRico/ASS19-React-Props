import React from 'react';

const DisplayProps = ({ text, count, isActive, items, user }) => {
  return (
    <div>
      <h2>String Prop</h2>
      <p>{text}</p>

      <h2>Number Prop</h2>
      <p>{count}</p>

      <h2>Boolean Prop</h2>
      <p>{isActive ? "Active" : "Inactive"}</p>

      <h2>Array Prop</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Object Prop</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Passing Different Prop Types</h1>
      <DisplayProps
        text="Hello, World!"                 // String
        count={42}                            // Number
        isActive={true}                       // Boolean
        items={["React", "JavaScript", "CSS"]} // Array
        user={{ name: "Alice", age: 25 }}      // Object
      />
    </div>
  );
};

export default App;
