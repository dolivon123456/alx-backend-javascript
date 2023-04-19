export default function getResponseFromAPI() {
        return new Promise((resolve, reject) => {
		// perform api request
                const data = "ALX Promise task";
                resolve(data);
        });
}
