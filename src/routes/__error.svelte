<script lang="ts" context="module">
	export function load({ status }: { status: number }) {
		return {
			props: {
				message: `${status}`
			}
		};
	}
</script>

<script lang="ts">
	export let message: string;
</script>

<div class="error">
	{message}
</div>
