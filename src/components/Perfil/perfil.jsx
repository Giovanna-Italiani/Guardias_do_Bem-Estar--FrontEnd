import './perfil.css';
import './PerfilFunction';

import Header from '../Header/header';
import { useUserProfile, editUserProfile } from './PerfilFunction';
import fotoPadrao from '../../assets/img/icones/voluntario/fotoPadrao.jpg';

function Perfil() {
  const { user, posts } = useUserProfile();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profilePage">
      <Header />

      <div className="userProfile">
        <div className="profileHeader">
          <div className="userDetails">
            <div className="userIdentity">
              {/* imagem do usuário  */}
              <img
                src={fotoPadrao}
                // src={user.image || {fotoPadrao}}
                alt={`${user.name}'s profile`}
              />

              {/* nome fornecido no cadastro */}
              <h1>{user.name}</h1>
            </div>

            <div className="ProfileOverview">
              {/* conterá o número de postagens */}
              <div className="userInfo">
                <strong>{user.posts}</strong>
                <h3>Post's</h3>
              </div>

              {/* conterá o número de seguidores */}
              <div className="userInfo">
                <strong>{user.followers}</strong>
                <h3>Seguidores</h3>
              </div>

              {/* conterá o número de usuários que segue */}
              <div className="userInfo">
                <strong>{user.following}</strong>
                <h3>Seguindo</h3>
              </div>
            </div>
          </div>

          {/* botão que permite alterar o cadastro do usuário  */}
          <div className="profileEdit">
            {/* conterá um texto escrito pelo usuário (pode ser vazio) */}
            <p className="userBio">{user.bio}</p>
            <button onClick={editUserProfile}>Edit Profile</button>
          </div>
        </div>

        <hr className="separator" />

        {/* conterá todas as postagens do usuário */}
        <div className="userGrid">
          {posts.map((post) => (
            <div key={post.id}>
              <img
                className="postGrid"
                src={post.imageUrl}
                alt={`Post ${post.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Perfil;
