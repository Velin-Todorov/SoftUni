function notify(message) {

	let notification = document.getElementById('notification')
	notification.textContent = message;


	if (notification.style.display == 'none') {
		notification.style.display = 'block';

	} else {
		notification.style.display = 'none';
	}
}