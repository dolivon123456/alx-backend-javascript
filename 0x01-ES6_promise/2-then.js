export default function handleResponseFromAPI(promise) {
  return promise
      .then(() => ({ status: 200, body: success }))
      .catch(() => new Error()) // If the Promise rejects, return a new error object
      .finally(() => console.log(Got a response from the API)); // Log a message indicating that a response was received from the API in the final block
}
