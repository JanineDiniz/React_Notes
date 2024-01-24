import { Container, Form } from "./styles";
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';
import {Textarea} from '../../components/Textarea';
import {NoteItem} from '../../components/NoteItem';
import {Section} from '../../components/Section';
import {Button} from '../../components/Button';
import { Link } from "react-router-dom";

export function New(){
  return(
    <Container>
      <Header></Header>

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título"></Input>
          <Textarea placeholder="Observações"></Textarea>

          <Section title="Links Úteis">
            <NoteItem value="https://rocketseat.com"></NoteItem>
            <NoteItem isNew placeholder="Novo Link"></NoteItem>
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react"></NoteItem>
              <NoteItem isNew placeholder="Nova Tag"></NoteItem>
            </div>
          </Section>
          <Button title="Salvar"></Button>
        </Form>
      </main>
    </Container>
  )
}