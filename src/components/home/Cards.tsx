import Card1 from "../../assets/cards/card1.svg";
import Card2 from "../../assets/cards/card2.svg";
import Card3 from "../../assets/cards/card3.svg";
import Card4 from "../../assets/cards/card4.svg";

export default function Cards() {
	return (
		<section className="flex flex-col items-center gap-8 px-8 lg:px-32 xl:items-start p-5">
            <h2 className="max-w-[400px] text-center font-roboto text-3xl font-semibold text-custom-gray-06 md:max-w-[700px] md:text-5xl xl:text-start">
                Nosso Propósito
            </h2>
            <p className="max-w-[750px] text-center text-lg text-custom-black md:text-2xl xl:text-start">
                Exploramos terapias inovadoras, como as psicodélicas, ligando ciência, 
                espiritualidade e filosofia. Comprovamos, por meio de evidências clínicas, 
                como essas abordagens podem impulsionar o bem-estar total: mental, físico.
                e emocional
            </p>

            <div className="max-w-[1280px] flex justify-center flex-wrap">
                <img className="m-3 max-w-[220px]" src={Card1}></img>
                <img className="m-3 max-w-[220px]" src={Card2}></img>
                <img className="m-3 max-w-[220px]" src={Card3}></img>
                <img className="m-3 max-w-[220px]" src={Card4}></img>
            </div>
        </section>
	);
}