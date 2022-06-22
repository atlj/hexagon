export function getReadingTime(markdown: string): number {
	const words = markdown.split(/\s+/g).length;
	const minutes = Math.ceil(words / 200);
	return minutes;
}
