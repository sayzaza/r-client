export const showLoading = () => {
	const loading = document.getElementById('loading');
	loading?.classList.remove('hide-loading');
	loading?.classList.add('show-loading');
}

export const hideLoading = () => {
	const loading = document.getElementById('loading');
	loading?.classList.remove('show-loading');
	loading?.classList.add('hide-loading');
}