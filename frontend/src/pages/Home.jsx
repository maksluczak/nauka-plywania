function Home() {
   return (
      <div className="min-h-screen">
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
                     <button className="border-2 border-black text-white bg-black hover:text-black hover:bg-white p-4 focus:outline-none rounded-lg">
                        Zapisz się na zajęcia
                     </button>
                     <button className="border-2 border-black hover:text-white hover:bg-black p-4 focus:outline-none rounded-lg">
                        Dowiedz się więcej
                     </button>
                  </div>
               </div>
            </div>
         </section>

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
               </div>
            </div>

         </section>
      </div>
   );
}

export default Home