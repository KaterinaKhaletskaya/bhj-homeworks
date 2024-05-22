const button = document.getElementById('send');

button.addEventListener('click', (e) => {
		e.preventDefault();
		const progress = document.getElementById('progress');

		let formData = new FormData(document.forms.form);

		let xhr = new XMLHttpRequest();

		xhr.upload.onprogress = function(event) {

            progress.value = event.loaded / event.total;
            
		}

		xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

		xhr.send(formData);

	}

)