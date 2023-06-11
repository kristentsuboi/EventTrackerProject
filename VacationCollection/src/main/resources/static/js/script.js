window.addEventListener('load', function(e) {
	console.log('script.js loaded');
	init();
	addVacationInit();
})

function init() {
	console.log('in init');
	getAllVacations();

	// load all vacations
	//add event listeners for existing buttons/forms
}

function addVacationInit() {
	document.addVacationForm.addVacation.addEventListener('click', function(e) {
		e.preventDefault();
		let addForm = document.addVacationForm;
		let country = addForm.country.value;
		let province = addForm.province.value;
		let name = addForm.name.value;
		let imageUrl = addForm.imageUrl.value;
		let description = addForm.description.value;
		let vacation = { country, province, name, imageUrl, description };
		addVacation(vacation);
	});
}

function addVacation(vacation) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', "api/vacations");
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				// * On success, if a response was received parse the film data
				//   and pass the film object to displayFilm().
				let vacation = JSON.parse(xhr.responseText);
				displayVacationDetails(vacation);
			}
			else {
				console.error("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	let jsonVacation = JSON.stringify(vacation);
	xhr.send(jsonVacation);
}

function getAllVacations() {
	// XHR to get list end point of api, call displayall events to show on page
	let xhr = new XMLHttpRequest();
	xhr.open('GET', "api/vacations");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let vacaList = JSON.parse(xhr.responseText);
				console.log(vacaList);
				displayAllVacations(vacaList);
			}
			else {
				console.err('Vacations not Found' + xhr.status)
			}
		}
	}
	xhr.send();
}

function displayAllVacations(vacaList) {
	// building table of vacations.........
	let tableBody = document.getElementById('vacaListBody');
	tableBody.textContent = "";
	if (vacaList && Array.isArray(vacaList)) {

		for (let vaca of vacaList) {
			let row = document.createElement('tr');
			tableBody.appendChild(row);
			let td = document.createElement('td');
			td.textContent = vaca.id;
			row.appendChild(td);
			td = document.createElement('td');
			td.textContent = vaca.province;
			row.appendChild(td);
			td = document.createElement('td');
			let picture = document.createElement('img');
			picture.src = vaca.imageUrl;
			picture.classList.add('imageThumbnail');
			td.appendChild(picture);
			row.appendChild(td);
			row.addEventListener('click', function(evt) {
				let vacaId = vaca.id;
				getVacationDetails(vacaId);

			});
		}
		let result = extractValue(vacaList, 'country');
		let notdup = removeDuplicates(result);
		console.log(notdup);
		let countryListSize = notdup.length;
		let h3 = document.createElement('h3');
		let div = document.getElementById('vacaListDiv');
		h3.textContent = "This collection includes " + countryListSize + " different countries!";
		div.appendChild(h3);
	}
}

function removeDuplicates(arr) {
	return arr.filter((item,
		index) => arr.indexOf(item) === index);
}


function extractValue(arr, prop) {
	let extractedValue = [];
	for (let i = 0; i < arr.length; ++i) {
		extractedValue.push(arr[i][prop]);
	}
	return extractedValue;
}

function getVacationDetails(vacaId) {
	// XHR
	let xhr = new XMLHttpRequest();
	xhr.open('GET', "api/vacations/" + vacaId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let vaca = JSON.parse(xhr.responseText);
				console.log(vaca);
				displayVacationDetails(vaca);
			}
			else {
				console.err('Vacation not Found' + xhr.status)
			}
		}
	}
	xhr.send();
}
function displayVacationDetails(vaca) {
	// display details in DIV
	let vacaDetails = document.getElementById('vacaDetailsDiv');
	vacaDetails.textContent = "";
	let h2 = document.createElement('h2');
	h2.textContent = "Vacation Details";
	vacaDetails.appendChild(h2);

	let deleteForm = document.createElement('form');
	deleteForm.name = 'deleteVacaForm';
	vacaDetails.appendChild(deleteForm);
	let vacaIdInput = document.createElement('input');
	vacaIdInput.type = 'hidden';
	vacaIdInput.name = 'vacaId';
	vacaIdInput.value = vaca.id;
	deleteForm.appendChild(vacaIdInput);
	let delButton = document.createElement('button');
	delButton.textContent = 'Delete this vacation';
	deleteForm.appendChild(delButton);
	delButton.classList.add("btn");
	delButton.classList.add("btn-danger");

	delButton.addEventListener('click', function(evt) {
		evt.preventDefault();
		console.log(document.deleteVacaForm);
		let vacaId = document.deleteVacaForm.vacaId.value;
		console.log('delete vaca: ' + vacaId);
		deleteVacation(vacaId);
		vacaDetails.textContent = "";
	});

	let updateVacaDiv = document.getElementById('updateVacaDiv');
	let updateForm = document.createElement('form');
	updateForm.name = 'updateVacaForm';
	vacaDetails.appendChild(updateForm);
	vacaIdInput = document.createElement('input');
	vacaIdInput.type = 'hidden';
	vacaIdInput.name = 'vacaId';
	vacaIdInput.value = vaca.id;
	updateForm.appendChild(vacaIdInput);
	let upButton = document.createElement('button');
	upButton.textContent = 'Update this vacation';
	updateForm.appendChild(upButton);
	upButton.classList.add("btn");
	upButton.classList.add("btn-primary");

	upButton.addEventListener('click', function(evt) {
		evt.preventDefault();
		let vacaId = document.updateVacaForm.vacaId.value;
		console.log('update vaca: ' + vacaId);
		displayUpdateForm(vaca);

	});



	let h3 = document.createElement('h3');
	h3.textContent = "Location: " + vaca.province + ", " + vaca.country;
	vacaDetails.appendChild(h3);
	let h4 = document.createElement('h4');
	h4.textContent = "Vacationer: " + vaca.name;
	vacaDetails.appendChild(h4);
	let paragraph = document.createElement('p');
	paragraph.textContent = vaca.description;
	vacaDetails.appendChild(paragraph);

	let picture = document.createElement('img');
	picture.src = vaca.imageUrl;
	picture.classList.add('detailImage');
	vacaDetails.appendChild(picture);


	// add rest of details of vacation.......
	// add update/delete buttons with events that pass stand id to ew update/delte function
}
function displayUpdateForm(vaca) {
	let updateDiv = document.getElementById("updateVacaDiv");
	let form = document.createElement('form');
	form.name = 'editVacation';
	updateDiv.appendChild(form);
	let input = document.createElement('input');
	input.type = 'hidden';
	input.id = 'updateVacaId';
	input.value = vaca.id;
	form.appendChild(input);
	input = document.createElement('input');
	input.name = 'country';
	input.type = 'text';
	input.classList.add("form-control");
	input.value = vaca.country;
	form.appendChild(input);
	let br = document.createElement('br');
	form.appendChild(br);
	input = document.createElement('input');
	input.name = 'province';
	input.type = 'text';
	input.classList.add("form-control");
	input.value = vaca.province;
	form.appendChild(input);
	br = document.createElement('br');
	form.appendChild(br)
	input = document.createElement('input');
	input.name = 'name';
	input.type = 'text';
	input.classList.add("form-control");
	input.value = vaca.name;
	form.appendChild(input);
	br = document.createElement('br');
	form.appendChild(br)
	input = document.createElement('input');
	input.name = 'imageUrl';
	input.type = 'text';
	input.classList.add("form-control");
	input.value = vaca.imageUrl;
	form.appendChild(input);
	br = document.createElement('br');
	form.appendChild(br)
	input = document.createElement('input');
	input.name = 'description';
	input.type = 'text';
	input.classList.add("form-control");

	input.value = vaca.description;
	form.appendChild(input);
	br = document.createElement('br');
	form.appendChild(br)

	let updateButton = document.createElement('button');
	updateButton.textContent = 'Click to Update';
	form.appendChild(updateButton);
	updateButton.classList.add("btn");
	updateButton.classList.add("btn-success");

	updateButton.addEventListener('click', function(evt) {
		evt.preventDefault();
		let vaca = document.getElementById('updateVacaId').value;
		console.log('update vaca: ' + vaca);
		let newCountry = form.country.value;
		let newProvince = form.province.value;
		let newName = form.name.value;
		let newImage = form.imageUrl.value;
		let newDescription = form.description.value;
		let updatedVacation = { id: vaca, country: newCountry, province: newProvince, name: newName, imageUrl: newImage, description: newDescription }
		updateVacation(updatedVacation);

	});

}


function updateVacation(updatedVacation) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', "api/vacations/" + updatedVacation.id);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				let vacation = JSON.parse(xhr.responseText);
				console.log("Vacation updated " + vacation);
				getVacationDetails(vacation.id);
			}
			else {
				console.error("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};
	let jsonVacation = JSON.stringify(updatedVacation);
	xhr.send(jsonVacation);

}

function deleteVacation(vacaId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', "api/vacations/" + vacaId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				console.log("Vacation deleted. " + xhr.responseText);
				getAllVacations();
			}
			else {
				console.error("Error: " + xhr.status)
			}
		}
	};
	xhr.send();

}



