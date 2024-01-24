import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
  return(
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/JanineDiniz.png" alt="Foto do Usuário" />
        <div>
          <span>Bem-vindo(a),</span>
          <strong>Janine Diniz</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine></RiShutDownLine>
      </Logout>

    </Container>
  );

}