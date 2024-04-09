export function parseIntDefault(value: any, defaultNumber: number = 0): number {
	const parsed = parseInt(value);
	return isNaN(parsed) ? defaultNumber : parsed;
}
