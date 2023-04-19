export default getFullResponseFromAPI(success) {
	return new Promise((resolve, reject) => {
		if (success) {
			resolve({ status: 200, body: 'Success' });
		} else {
			reject(new error('The fake API is not working currently'));
		}
	});
}
