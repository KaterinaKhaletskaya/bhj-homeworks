let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = "json";
xhr.send();

xhr.onload = function() {
	const pollTitle = document.getElementById('poll__title');
	if (xhr.readyState === xhr.DONE && xhr.status === 200) {
		let titleJson = xhr.response.data.title;
		pollTitle.textContent = titleJson;

		const pollAnswers = document.getElementById('poll__answers');


		let answers = xhr.response.data.answers;

		for (ans of answers) {
			pollAnswers.insertAdjacentHTML("afterbegin", "<button class='poll__answer'></button>");
			const pollAnswer = document.querySelector('.poll__answer');
			pollAnswer.textContent = ans;

			pollAnswer.addEventListener('click', () => {
				alert("Спасибо, ваш голос засчитан!");

				// let xhr2 = new XMLHttpRequest();
				// xhr2.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
				// xhr2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				// xhr2.send('vote=1&answer=2');

				// xhr2.onload = function (){
				//     if (xhr2.readyState === xhr2.DONE && xhr2.status === 200){
				//     let answers2 =  xhr2.response;
				//     pollAnswers.remove();
				//     }
				// }


			})
		}


	}
}