import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
	return Promise.allSettled([
		signUpUser(firstName, lastName),
		uploadPhoto(fileName),
	]).then((values) => {
		const user = [];
		for (const item of values) {
			user.push({ status: item.status, value: item.value || item.reason });
    }
    return user;
  });
}
