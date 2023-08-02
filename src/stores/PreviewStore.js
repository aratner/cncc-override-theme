import { atom, onMount, task } from "nanostores";
// const STRAPI_API = "STRAPI API ROUTE URL GOES HERE";

export const $data = atom([]);

// Uncooment the below to set up Preview Mode
// onMount($data, () => {
//   task(async () => {
//     const response = await fetch(STRAPI_API);
//     const data = await response.json();
//     $data.set(data.data);
//   });
// });
