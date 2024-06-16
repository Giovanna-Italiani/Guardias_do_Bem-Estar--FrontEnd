import './homepage.css';
import Header from '../Header/header';
import Pagination from '../Paginacao/Pagination';
import Feed from './Feed/Feed';
import { useState, useEffect } from 'react';

function Homepage() {
  // Estado para os posts
  const [posts, setPosts] = useState([]);

  // Estado para a página atual
  const [currentPage, setCurrentPage] = useState(1);

  // Constante para o número de posts por página
  const postsPerPage = 5;

  // // Simulando a recuperação de posts de uma API
  // useEffect(() => {
  //   // Esta função simula a busca de posts de uma API
  //   const fetchPosts = async () => {
  //     // Aqui você pode fazer uma chamada real para sua API
  //     // Exemplo: const response = await fetch('/api/posts');
  //     // const data = await response.json();
  //     // Para fins de exemplo, usaremos uma lista vazia para simular a ausência de posts
  //     const data = []
  //     setPosts(data)
  //   }
  //   fetchPosts()
  // }, [])

  // Efeito para simular a recuperação de posts de uma API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulando a criação de uma lista de posts
        const data = [];
        for (let i = 1; i <= 10; i++) {
          data.push({
            id: i,
            imageUrl: `https://via.placeholder.com/150/${Math.floor(
              Math.random() * 16777215,
            ).toString(16)}/ffffff`,
            title: `Post ${i}`,
            description: `Description ${i}`,
          });
        }
        setPosts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Lógica para calcular os índices dos posts a serem exibidos na página atual
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Função para alterar a página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Efeito para obter a altura do header e atualizar o estado
  useEffect(() => {
    const header = document.querySelector('.header');
    if (header) {
      setHeaderHeight(header.clientHeight);
    }
  }, []);

  return (
    <div className="feed">
      <Header />
      <div className="homepage">
        <div className="headerGridPosts">
          {currentPosts.map((post) => (
            <Feed
              key={post.id}
              imageUrl={post.imageUrl}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Homepage;
