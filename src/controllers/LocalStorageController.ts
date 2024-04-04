class LocalStorageControllers {
	static time(): number {
		const local = Number(localStorage.getItem("time"));
		const time_now = new Date().getTime();

		const result = (time_now - local) / 1000;

		const minutes = Math.floor(60 - ((result / 60) % 60));

		return minutes;
	}

	static checkTime(): boolean {
		const local = localStorage;

		if (local.getItem("time")) {
			const time_local = Number(local.getItem("date"));
			const time_now = new Date().getTime();

			if (time_now - time_local < 1) {
				return true;
			} else {
				return false;
			}
		} else {
			const time = new Date().getTime();
			local.setItem("time", JSON.stringify(time));

			return true;
		}
	}
}

export default LocalStorageControllers;
