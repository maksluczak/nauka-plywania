import { Link } from "react-router-dom";

export default function Header() {
    return (
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
               <div className="text-center max-w-3xl mx-auto">
                  <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance tracking-wide leading-snug">
                     Pozbądź się strachu i naucz się pływać już dziś!
                  </h1>
                  <p className="text-3xl text-gray-500/50"> 
                     Profesjonalne lekcje pływania dla osób w każdym wieku i na każdym poziomie zaawansowania. Jesteśmy do Twojej dyspozycji siedem dni w tygodniu.
                  </p>
                  <div className="flex flex-wrap gap-10 justify-center mt-10">
                     <Link to="/login">
                        <button className="border-2 border-black text-white bg-black hover:text-black hover:bg-white p-4 focus:outline-none rounded-lg">
                           Zapisz się na zajęcia
                        </button>
                     </Link>
                     <Link to="/">
                        <button className="border-2 border-black hover:text-white hover:bg-black p-4 focus:outline-none rounded-lg">
                           Dowiedz się więcej
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         </section>
    );
}