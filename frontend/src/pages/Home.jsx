import { Link } from "react-router-dom";
import Header from "../components/home/Header";

function Home() {
   return (
      <>
         <Header />

         <section className="py-30 px-4 sm:px-6 lg:px-8 bg-gray-300/20">
            <div className="max-w-7xl mx-auto">
               <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">
                  Dlaczego wybrać Naukę Pływania?
               </h1>
               <div className="flex flex-wrap max-w-5xl mx-auto gap-12 justify-center">
                  <div className="w-30/100 p-6 bg-white rounded-lg border-w border-black shadow-lg">
                     <h5 className="mb-2 text-xl font-semibold tracking-tight">
                        Zajęcia w małych grupach
                     </h5>
                     <p className="text-base text-gray-500/80">
                        Uczymy w kameralnych grupach od 2 do 5 osób, co zapewnia pełną uwagę instruktora i sprzyja szybszemu postępowi.
                     </p>
                  </div>
                  <div className="w-30/100 p-6 bg-white rounded-lg border-w border-black shadow-lg">
                     <h5 className="mb-2 text-xl font-semibold tracking-tight">
                        Lekcje dla każdego
                     </h5>
                     <p className="text-base text-gray-500/80">
                        Oferujemy zajęcia dopasowane do wieku i poziomu umiejętności – dla dzieci, dorosłych i seniorów.
                     </p>
                  </div>
                  <div className="w-30/100 p-6 bg-white rounded-lg border-w border-black shadow-lg">
                     <h5 className="mb-2 text-xl font-semibold tracking-tight">
                        Zaangżowany zespół
                     </h5>
                     <p className="text-base text-gray-500/80">
                        Nasi doświadczeni instruktorzy z pasją i indywidualnym podejściem pomagają każdemu osiągnąć postępy w wodzie.
                     </p>
                  </div>
               </div>
            </div>

            <div className="max-w-7xl mx-auto mt-30">
               <div className="text-center max-w-3xl mx-auto">
                  <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-balance">
                     Gdzie nas znajdziesz?
                  </h1>
                  <p className="text-2xl text-gray-500/50">
                     Jesteśmy tam, gdzie wygoda spotyka się z pasją do pływania – odwiedź nas i przekonaj się sam!
                  </p>
               </div>
               <div className="mx-auto w-4/5 p-6 mt-8 bg-white rounded-lg border-w border-black shadow-lg">
                  <h1 className="p-2 text-xl font-semibold tracking-tight">
                     Skontaktuj się z nami
                  </h1>
                  <div className="flex gap-3 px-2 py-1">
                     <div>
                        <p className="text-base">Numer telefonu</p>
                        <p className="text-base text-gray-500/80">+48 000 000 000</p>
                      </div>
                  </div>
                  <div className="flex gap-3 px-2 py-1">
                     <div>
                        <p className="text-base">Email</p>
                        <p className="text-base text-gray-500/80">example@gmail.com</p>
                      </div>
                  </div>
                  <div className="flex gap-3 px-2 py-1">
                     <div>
                        <p className="text-base">Adres basenu</p>
                        <p className="text-base text-gray-500/80">Inwalidów Wojennych 20, 43-609, Jaworzno</p>
                      </div>
                  </div>
               </div>

               <div className="mx-auto w-4/5 p-6 mt-8 bg-white rounded-lg border-w border-black shadow-lg">
                  <h1 className="p-2 text-xl font-semibold tracking-tight">
                     Kiedy nas spotkasz?
                  </h1>
                  <div className="flex justify-between text-base text-gray-500/80">
                     <span className="px-2 py-1">
                        Poniedziałek-Piątek
                     </span>
                     <span>
                        15:00-20:00
                     </span>
                  </div>
                  <div className="flex justify-between text-base text-gray-500/80">
                     <span className="px-2 py-1">
                        Sobota-Niedziela
                     </span>
                     <span>
                        8:00-13:00
                     </span>
                  </div>
               </div>

               <div className="mx-auto h-[500px] w-4/5 rounded-lg overflow-hidden shadow-lg mt-8">
                  <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.7360077524163!2d19.225606896789557!3d50.22215350000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c33f70d2e549%3A0xc667fd89faca9c43!2sBasen%20Jaworzno!5e0!3m2!1spl!2spl!4v1761001478610!5m2!1spl!2spl"
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     allowFullScreen=""
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                  />
               </div>
            </div>
         </section>

         <section className="py-30 px-4 sm:px-6 lg:px-8 bg-black">
            <div className="max-w-3xl mx-auto text-center">
               <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance text-white">
                  Poznaj naszą załogę!
               </h1>
               <p className="text-2xl text-gray-200">
                  Nasi instruktorzy są pasjonatami pływania i oddani pomaganiu Ci w osiągnięciu Twoich celów w wodzie
               </p>
               <Link to="/staff">
                  <button className="border-2 border-white bg-white py-3 px-6 focus:outline-none rounded-lg mt-8">
                     Nasi trenerzy
                  </button>
               </Link>
            </div>
         </section>
      </>
   );
}

export default Home