<script lang="ts">
	export let onClick: () => void;
</script>

<svg
	on:click={onClick}
	width="37"
	height="36"
	viewBox="0 0 37 36"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<g clip-path="url(#clip0_879_192)">
		<path
			d="M1.625 13.5L18.5 22.5L35.375 13.5"
			stroke="white"
			stroke-opacity="0.2"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</g>
	<defs>
		<clipPath id="clip0_879_192">
			<rect width="36" height="36" fill="white" transform="translate(0.5)" />
		</clipPath>
	</defs>
</svg>

<style lang="scss">
	svg {
		@apply cursor-pointer;
	}
</style>
