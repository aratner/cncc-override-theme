import { atom, onMount, task } from "nanostores";

export const $data = atom([]);

// onMount($data, () => {
//   task(async () => {
//     const response = await fetch("http://192.168.40.91:1337/api/products");
//     const data = await response.json();
//     $data.set(data.data);
//   });
// });
