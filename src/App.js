import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState();
  const [input2, setInput2] = useState();
  const [result, setResult] = useState();

  function arrayLength(args) {
    return args.length;
  }

  // console.log(arrayLength([1, 2, 3, 5, 6, 7]));

  function findItemInArray(array, item) {
    return array.indexOf(item);
  }

  // console.log(findItemInArray([1, 2, 3, 4, 5], 4));

  function replaceItemInArray(array, replace, newItem) {
    return array.map((item) => {
      if (item === replace) {
        return (item = newItem);
      }
      return item;
    });
  }

  // console.log(replaceItemInArray([1, 2, 3, 4, 5, 3], 3, 9));

  function mergeArrays(array1, array2) {
    return array1.concat(array2);
  }

  // console.log(mergeArrays([1, 2, 3], [5, 6, 7]));

  function findItemAtIndex(string, index) {
    return string[index];
  }

  // console.log(findItemAtIndex("Neogcamp", 4));

  function compareDates(date1, date2) {}

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="container">
        <h3>Check which date comes first</h3>
        <label>Date 1: </label>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="date"></input>
        <label>Date 2: </label>
        <input
          onChange={(e) => setInput2(e.target.value)}
          type="date"></input>
        <button onClick>Check</button>
      </div>
    </div>
  );
}
