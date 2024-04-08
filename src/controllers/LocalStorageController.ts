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

		if (local.getItem("time") && local.getItem("turn")) {
			const time_local = Number(local.getItem("time"));
			const turn_local = Number(local.getItem("turn"));

			const time_now = new Date().getTime();

			if (turn_local < 3) {
				local.setItem("turn", JSON.stringify(turn_local + 1));
				return true;
			} else if (time_now - time_local < 1) {
				return true;
			} else {
				return false;
			}
		} else {
			const time = new Date().getTime();
			local.setItem("time", JSON.stringify(time));
			local.setItem("turn", JSON.stringify(1));
			return true;
		}
	}
}

export default LocalStorageControllers;
