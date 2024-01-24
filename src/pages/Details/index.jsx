import {Container, Links, Content} from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details(){
  
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota"></ButtonText>
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsam inventore ducimus eum ipsa asperiores error quo porro exercitationem nesciunt corrupti cupiditate velit nemo maiores vitae amet autem, laudantium consectetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ipsam inventore ducimus eum ipsa asperiores error quo porro exercitationem nesciunt corrupti cupiditate velit nemo maiores vitae amet autem, laudantium consectetur.

          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="http://rocketseat.com">http://rocketseat.com</a>
              </li>
              <li>
                <a href="http://rocketseat.com">http://rocketseat.com</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"></Tag>
            <Tag title="nodejs"></Tag>
          </Section>      
          <Button title="Voltar"></Button>
        </Content>
      </main>
    </Container>
  )
}