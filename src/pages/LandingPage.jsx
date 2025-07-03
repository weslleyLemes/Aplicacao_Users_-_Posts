import { useNavigate } from 'react-router-dom';

//pagina raiz, simples pagina que exibe uma mensagem de disclamer para o usuario e possui um botao para iniciar a aplicacao.
function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <header className="w-full bg-gray-900 py-10 px-4">
        <h1 className="text-2xl md:text-4xl font-extrabold text-center leading-snug tracking-wide max-w-4xl mx-auto bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
          Esta aplicação consome dados da <span className="text-yellow-300">API JSONPlaceholder</span> e permite visualizar <span className="text-cyan-300">usuários</span> e seus <span className="italic text-green-300">posts</span> de forma interativa e responsiva.
        </h1>
      </header>

      <button
        className="btn text-xl btn-outline btn-primary btn-lg transition-all duration-200 ease-in-out hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-inner"
        onClick={() => navigate('/Users')}
      >
        Iniciar aplicação
      </button>
    </div>
  );
}

export default LandingPage;
