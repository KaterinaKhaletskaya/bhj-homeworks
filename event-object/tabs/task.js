const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');



tabs.forEach((tab, index) => {
	tab.addEventListener('click', () => {
		tabs.forEach(s => s.classList.remove('tab_active'));
		tabContents.forEach(s => s.classList.remove('tab__content_active'));
		let activeTab = tabs[index];
		let activeTabCont = tabContents[index];

		activeTab.classList.add('tab_active');
		activeTabCont.classList.add('tab__content_active');
	})

})

