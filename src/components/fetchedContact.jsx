// import { useState, useEffect } from "react";

// const FetchedContact = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const url = "https://stoplight.io/mocks/chatdaddy/openapi/15107977/contacts";
//   const token =
//     "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6IjEwMTExMTEwMDAwMDAwMDExMTExMTExMTEwMTAwMTExMDAwMDAwMDExMDAwMDAwMDAwMDAxMDAxMTExMTExMTExMSIsImlhdCI6MTY0MjA3NzMzMCwiZXhwIjoxNjQyMDgwOTMwLCJ1c2VyIjp7ImlkIjoiYWI4OWUyNWUtNWEyYy00NTU1LThjYjUtNTcxMTYwNmM2ZWQxIiwiZnVsbE5hbWUiOiJ6b29tZGVtbzIiLCJwaG9uZU51bWJlciI6Ijg1MjY1ODc4NTQ0IiwidGVhbUlkIjoiYTAwMTk5NGItOTE4Yi00OTM5LTg1MTgtMzM3NzczMmU0ZTg4In19.0OKHTY5rLojmzB4cR0KQ-r2D5XzOeSlD3zJfpVU7x5UhznG3KaBCk_eNPmKnHNRBH3k6frnrQ3AhDMTre-8Z2w";

//   useEffect(() => {
//     async function getMovies() {
//       try {
//         let response = await fetch(url, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Prefer: "code=200, dynamic=true",
//             Authorization: `{   "access_token": ${token} }`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error(
//             `This is an HTTP error: The status is ${response.status}`
//           );
//         }

//         let data = await response.json();
//         setMovies(data.contacts);
//         console.log(data.contacts);
//         setError(null);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     getMovies();
//   }, []);

//   return { movies, loading, error };
// };

// export default FetchedContact;
