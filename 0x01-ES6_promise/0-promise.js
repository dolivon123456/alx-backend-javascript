export default function getResponseFromAPI() {
  const success = true;

  // Returns a new Promise with a callback function that takes in a resolve and reject function
  return new Promise((resolve, reject) => {
    if (success) {
      resolve(); // If success is true, the Promise is resolved with no value
    } else {
      reject(); // If success is false, the Promise is rejected with no value
    }
  });
}
