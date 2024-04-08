import notfound from "../../assets/404-error.png";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

export default function NotFoundPage() {
	return (
		<section>
			<Header />
			<div className="relative flex h-full min-h-screen flex-col items-center justify-between gap-4 bg-gradient-to-r from-white to-custom-gray-04 pt-40">
				<div className="flex flex-wrap items-center justify-center py-8">
					<figure className="size-96 transition-all max-md:size-72 max-sm:size-52">
						<img src={notfound} />
					</figure>
					<div className="flex flex-col items-center gap-4">
						<span className="font-roboto text-5xl font-bold text-white max-xs:text-2xl">
							Ooops...
						</span>
						<span className="h-fit rounded-md bg-white px-8 py-3 text-center font-poppins text-3xl font-semibold text-custom-gray-06 max-sm:mx-4 max-xs:text-xl">
							Página não encontrada!
						</span>
					</div>
				</div>
				<div className="w-full">
					<Footer />
				</div>
			</div>
		</section>
	);
}
