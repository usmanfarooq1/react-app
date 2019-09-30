export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// action creator
export function increment() {
    return { type: INCREMENT };
  }
  
export const decrement = () => ({ type: DECREMENT });

// export const todos= ()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
// }