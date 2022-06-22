import { writable } from 'svelte/store';
import { browser } from '$app/env';

function getThemeFromLocalStorage() {
	if (browser) {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark' || theme === 'light') {
			return theme;
		}
	}
	return 'dark';
}

export const theme = writable<'dark' | 'light'>(getThemeFromLocalStorage());

theme.subscribe((currentTheme) => {
	if (browser) {
		localStorage.setItem('theme', currentTheme);
	}
});
