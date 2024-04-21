const button = document.getElementById('send');

button.addEventListener('click', (e) => {
		e.preventDefault();
		const progress = document.getElementById('progress');

		let formData = new FormData(document.forms.form);


		let xhr = new XMLHttpRequest();
        if (xhr.readyState === 0) {
            progress.value = 0.2;
        }

		xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');



		xhr.onloadstart = function() {
		
			if (xhr.readyState === 1) {
				progress.value = 0.4;
			}
		}

		xhr.send(formData);

		if (xhr.readyState === 2) {
            progress.value = 0.6;
        }


		xhr.onprogress = function() {

            if (xhr.readyState === 3) {
				progress.value = 0.8;
			};
		}

		xhr.onload = function() {
 
			if (xhr.readyState === 4) {
				progress.value = 1;
                
			}
            
		}

       
	}





)