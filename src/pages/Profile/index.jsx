import { Container, Form, Avatar } from "./styles";
import {FiArrowLeft, FiMail, FiLock, FiUser, FiCamera} from 'react-icons/fi'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import { Link } from "react-router-dom";

export function Profile(){
  return(
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft></FiArrowLeft>
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/JanineDiniz.png" alt="Foto do Usuário" />
          <label htmlFor="avatar">
            <FiCamera></FiCamera>
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />
        <Button title="Salvar"></Button>
      </Form>
    </Container>
  )
}