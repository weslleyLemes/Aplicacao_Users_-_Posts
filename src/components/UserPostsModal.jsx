import React from "react";
import LoadingProgress from "./LoadingProgress";

const UserPostsModal = ({
  selectedUser,
  posts,
  loadingPosts,
  onClose,            
  selectedPost,
  setSelectedPost,
}) => {
  if (!selectedUser) return null;

  return (
    <>
      {/* Lista de posts do usuário */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 bg-custom">
        <div className="bg-white rounded-lg p-6 max-w-2xl w-full overflow-auto max-h-[90vh]">
          <h3 className="text-xl font-bold mb-4">Posts do Usuário {selectedUser}</h3>

          {loadingPosts ? (
            <LoadingProgress />
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="mb-4 p-4 bg-gray-100 rounded shadow cursor-pointer hover:bg-gray-200 transition"
              >
                <h4 className="font-semibold mb-1">{post.title}</h4>
                <p className="truncate">{post.body}</p>
              </div>
            ))
          )}

          {/* Botão de fechar */}
          <div className="text-right mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>

      {/* Modal secundário - Detalhes do post clicado */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-60 bg-custom">
          <div className="bg-white rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-auto shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
            <p className="text-lg text-gray-800">{selectedPost.body}</p>
            <div className="text-right mt-6">
              <button
                onClick={() => setSelectedPost(null)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserPostsModal;
