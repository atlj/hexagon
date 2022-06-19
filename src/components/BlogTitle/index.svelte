<script lang="ts">
	export let title: string;
	export let authorName: string;
	export let readingTime: number;
	export let date: Date;
</script>

<div class="blog-title">
	<h1>
		{title}
	</h1>
	<div class="blog-title__second-row">
		<div>
			{authorName}{' | '}{readingTime.toFixed(0)} dakika
		</div>
		<div>
			{date.toDateString()}
		</div>
	</div>
</div>

<style lang="scss">
	.blog-title {
		@apply flex flex-col gap-2;

		h1 {
			@apply font-bold text-xl text-contrast-light md:text-2xl dark:text-contrast-dark;
		}

		&__second-row {
			@apply flex justify-between text-sm text-contrast-light40 md:text-base dark:text-contrast-dark40;
		}
	}
</style>
