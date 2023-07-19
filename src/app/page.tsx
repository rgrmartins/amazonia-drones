
export default function Home() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
        <div className="lg:flex items-center space-x-16">
            <div className="w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] mt-8 mx-auto px-16 py-8 rounded-lg">
                <h2 className="text-center text-2xl font-bold tracking-wide text-gray-800">Amazonia Drones</h2>
                <p className="text-center text-sm text-gray-600 mt-2">Calcule a rota mais rápida</p>

                <form className="my-8 text-sm">
                    <div className="flex flex-col my-4">
                        <label htmlFor="origin" className="text-gray-700">Digite o ponto de partida do Drone</label>
                        <input type="text" name="origin" id="origin"
                               className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                               placeholder="Digite a origem do Drone"></input>
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="package" className="text-gray-700">Origem do produto</label>
                        <input type="text" name="package" id="package"
                               className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                               placeholder="Digite a origem do produto"></input>
                    </div>

                    <div className="flex flex-col my-4">
                        <label htmlFor="destiny" className="text-gray-700">Destino do produto</label>
                        <input type="text" name="destiny" id="destiny"
                               className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900"
                               placeholder="Digite o destino do produto"></input>
                    </div>
                    <div className="my-4 flex items-center justify-end space-x-4">
                        <button
                            className="bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-2 text-gray-100 hover:shadow-xl transition duration-150">Calcular
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-center">
                <h1>test</h1>
            </div>
        </div>
    </main>
  )
}
