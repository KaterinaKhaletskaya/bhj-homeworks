const editor = document.getElementById('editor');

if (window.localStorage.myKey) {
	editor.value = window.localStorage.getItem('myKey');
}
editor.addEventListener('change', () => {
	const editorValue = editor.value;
	window.localStorage.setItem('myKey', editorValue);
})