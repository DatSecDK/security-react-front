const URL = "https://testprogram.dk/ExamSem3/api/login";
function handleHttpErrors(res) {
	if (!res.ok) {
		return Promise.reject({ status: res.status, fullError: res.json() });
	}
	return res.json();
}

class UserFacade {
	getUsers = () => {
		return fetch(URL).then(handleHttpErrors);
	};

	login = user => {
		const options = {
			method: "POST",
			headers: {
				"Content-type": "application/json"
			},

			body: JSON.stringify(user)
		};
		return fetch(URL, options).then(handleHttpErrors);
	};
}
const uf = new UserFacade();
export default uf;
