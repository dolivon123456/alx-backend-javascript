export default class HolbertonCourse {
	constructor(name, length, students) {
		this._name = name;
		this._length = length;
		this._students = students;
	}

	//getter name
	get name() {
		return this._name;
	}

	//setter name
	set name(name) {
		if (typeof name !== 'string') {
			throw TypeError('name must be a string');
		}
		this._name = name;
	}

	//getter length
	get length() {
		return this._length;
	}

	//setter length
	set length(length) {
		if (typeof length !== 'number') {
			throw TypeError('length must be a number');
		}
		this._length = length;
	}

	//getter students
	get students() {
		return this._students;
	}

	//setter students
	set students(students) {
		if (!Array.isArray(students)) {
			throw TypeError('students must be an array of strings');
		}
		this._students = students;
	}
}
