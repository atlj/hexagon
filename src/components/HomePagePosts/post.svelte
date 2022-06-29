<script lang="ts">
	import type { PostType } from '@/types';
	import { getReadingTime } from '@/utils/readingTime';
	import './post.scss';

	export let post: PostType;
</script>

<a href={`blog/${post.attributes.slug}`} class="post">
	<img src={post.attributes.coverSmallUrl} class="post__thumbnail" />
	<div class="post__title">
		{post.attributes.title}
		<div class="post__detail">
			{`${getReadingTime(post.attributes.body)} min read | Burak Güner`}
		</div>
	</div>
</a>
