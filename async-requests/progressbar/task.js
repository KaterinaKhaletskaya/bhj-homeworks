const button = document.getElementById('send');

button.addEventListener('click', (e) => {
		e.preventDefault();
		const progress = document.getElementById('progress');

		let formData = new FormData(document.forms.form);

		let xhr = new XMLHttpRequest();

		xhr.upload.onprogress = function(event) {

			if (event.loaded === event.total) {
				progress.value = 1.0;
			} else {
                progress.value = event.loaded / 1000000;
            }
		}

		xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

		xhr.send(formData);

	}

)