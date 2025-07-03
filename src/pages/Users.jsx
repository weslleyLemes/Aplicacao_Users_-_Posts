import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import LoadingProgress from "../components/LoadingProgress";
import UserPostsModal from "../components/UserPostsModal";

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [showProgress, setShowProgress] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  const navigate = useNavigate();

  // Fetch inicial de usuários com tratamento de erro
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        //const res = await fetch("https://jsonplaceholder.typicode.com/userswww");
         const res = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!res.ok) throw new Error("Erro ao buscar usuários");

        const data = await res.json();

        await new Promise(resolve => setTimeout(resolve, 4000)); // loading fake
        setUsers(data);
      } catch (error) {
        console.error(error);
        alert("Erro ao carregar usuários. Tente novamente mais tarde.");
      } finally {
        setShowProgress(false);
        setLoadingUsers(false);
      }
    };

    fetchUsers();
  }, []);

  // Fetch de posts com tratamento de erro
  const openModal = async (userId) => {
    setLoadingPosts(true);
    setSelectedUser(userId);

    try {
      //const res = await fetch(`https://jsonplaceholderoooooooooo`);
       const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

      if (!res.ok) throw new Error("Erro ao buscar posts");

      const data = await res.json();
      await new Promise(resolve => setTimeout(resolve, 4000)); // loading fake

      setPosts(data);
    } catch (error) {
      console.error(error);
      alert("Erro ao carregar posts do usuário.");
      setSelectedUser(null); // fecha modal se falhar
    } finally {
      setLoadingPosts(false);
    }
  };

  const closeModal = () => {
    setSelectedUser(null);
    setPosts([]);
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <button
        onClick={() => navigate('/')}
        className="btn-lg fixed top-4 left-4 btn btn-outline btn-secondary shadow-md transition-all duration-200 hover:scale-105 active:scale-95 z-50 buttonBack"
      >
        ⬅ Voltar
      </button>

      <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
        Users & Posts
      </header>

      <div className="flex w-full flex-col lg:flex-row root">
        <div className="bg-base-300 grid h-32 grow place-items-center elementMod react">Posts</div>
      </div>

      <main className="flex-1 p-4">
        <h2 className="text-2xl font-bold mb-4">Lista de Usuários</h2>
        {showProgress ? (
          <LoadingProgress onFinish={() => setShowProgress(false)} />
        ) : (
          <div className="overflow-auto">
            <table className="min-w-full bg-white rounded shadow">
              <thead className="bg-blue-200">
                <tr>
                  <th className="p-2 text-left">Nome</th>
                  <th className="p-2 text-left">Email</th>
                  <th className="p-2 text-left">Cidade</th>
                  <th className="p-2 text-left">Empresa</th>
                  <th className="p-2 text-left">Ações</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-t">
                    <td className="p-2 font-semibold">{user.name}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2 text-gray-600">{user.address.city}</td>
                    <td className="p-2 font-bold text-xl">{user.company.name}</td>
                    <td className="p-2">
                      <button
                        onClick={() => openModal(user.id)}
                        className="text-blue-600 hover:underline"
                      >
                        Ver posts
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <UserPostsModal
        selectedUser={selectedUser}
        posts={posts}
        loadingPosts={loadingPosts}
        selectedPost={selectedPost}
        setSelectedPost={setSelectedPost}
        onClose={closeModal}
      />

      <footer className="bg-neutral text-white text-center p-4">
        Projeto teste VidyaBI - JSONPlaceholder Users & Posts
      </footer>
    </div>
  );
}

export default App;
