class LocalStorageControllers {
	private static setData(count?: number) {
		const local = localStorage;
		if (count) {
			const { turn } = this.getData();
			localStorage.setItem("turn", JSON.stringify(turn + count));
		} else {
			const now = new Date().getTime();
			local.setItem("turn", JSON.stringify(1));
			local.setItem("time", JSON.stringify(now));
		}
	}

	private static getData() {
		const local = localStorage;
		const items = {
			time: Number(local.getItem("time")),
			turn: Number(local.getItem("turn")),
		};

		return items;
	}

	static time(): number {
		const { time } = this.getData();
		const now = new Date().getTime();

		const result = (now - time) / 1000;

		const minutes = Math.floor(60 - ((result / 60) % 60));

		return minutes;
	}

	static checkTime(): boolean {
		const { time, turn } = this.getData();

		if (time > 0 && turn > 0) {
			if (this.time() < 60) {
				if (turn < 3) {
					this.setData(1);
					return true;
				} else {
					return false;
				}
			} else {
				this.setData();
				return true;
			}
		} else {
			this.setData();
			return true;
		}
	}
}

export default LocalStorageControllers;
