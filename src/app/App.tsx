import Introduction from "../components/home/Introduction.tsx";
import ImprintingCoin from "../components/home/ImprintingCoin.tsx";

function App() {
	return (
		<section className="h-screen">
			{/* <Logo color="red" /> */}
			<main>
				<Introduction />
				<ImprintingCoin />
			</main>
		</section>
	);
}

export default App;
