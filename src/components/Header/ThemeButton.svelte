<script lang="ts">
	import { theme } from '@/store/theme';

	function toggleTheme() {
		theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
	}
</script>

<button>
	<svg
		on:click={toggleTheme}
		class={`theme-button ${$theme === 'dark' ? 'theme-button--dark' : ''}`}
		width="32"
		height="32"
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M28 17.0533C27.7903 19.3229 26.9385 21.4859 25.5443 23.2891C24.1502 25.0922 22.2713 26.4611 20.1276 27.2354C17.9839 28.0097 15.664 28.1575 13.4393 27.6615C11.2147 27.1654 9.17733 26.0461 7.56564 24.4344C5.95395 22.8227 4.83459 20.7853 4.33855 18.5607C3.84251 16.336 3.99029 14.0161 4.76462 11.8724C5.53894 9.72868 6.90778 7.84982 8.71096 6.45567C10.5141 5.06152 12.6771 4.20974 14.9467 4C13.6179 5.79769 12.9785 8.0126 13.1447 10.2419C13.311 12.4712 14.2718 14.5667 15.8525 16.1475C17.4333 17.7282 19.5288 18.689 21.7581 18.8553C23.9874 19.0215 26.2023 18.3821 28 17.0533V17.0533Z"
			stroke="black"
			fill="#ffffffcc"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</button>

<style lang="scss">
	.theme-button {
		@apply w-8 h-8 md:w-12 md:h-12;

		fill-opacity: 0;
		stroke-opacity: 0.8;
		-webkit-transition: fill-opacity 700ms, stroke-opacity 700ms;
		transition: fill-opacity 700ms, stroke-opacity 700ms;

		&--dark {
			fill-opacity: 1;
			stroke-opacity: 0;
		}
	}
</style>
