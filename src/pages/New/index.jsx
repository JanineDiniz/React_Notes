import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';
import {Textarea} from '../../components/Textarea';
import {NoteItem} from '../../components/NoteItem';
import {Section} from '../../components/Section';
import {Button} from '../../components/Button';
import { ButtonText } from "../../components/ButtonText";

import { api } from "../../services/api";

export function New(){
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(linkDeleted){
    setLinks(prevState => prevState.filter(link => link !== linkDeleted))
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(tagDeleted){
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted))
  }

  async function handleNewNote(){
    if(!title){
      return alert("Digite o título da nota")
    }
    if(newLink){
      return alert("Você deixou um link no campo para adicionar, mas não adicionou. Clique para adicionar ou deixe o campo vazio!")
    }
    if(newTag){
      return alert("Você deixou uma tag no campo para adicionar, mas não adicionou. Clique para adicionar ou deixe o campo vazio!")
    }

    alert("Nota criada com sucesso!")
    navigate(-1)

    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })
    
  }

  return(
    <Container>
      <Header></Header>

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText title="Voltar" onClick={handleBack}></ButtonText>
          </header>

          <Input placeholder="Título" onChange={e => setTitle(e.target.value)}></Input>
          <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)}></Textarea>

          <Section title="Links Úteis">
            {
              links.map((link, index)=>(
                <NoteItem key={String(index)} value={link} onClick={() => handleRemoveLink(link)}></NoteItem>
              ))
            }

            <NoteItem isNew placeholder="Novo Link" value={newLink} onChange={e => setNewLink(e.target.value)} onClick={handleAddLink}></NoteItem>
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem key={String(index)} value={tag} onClick={() => handleRemoveTag(tag)}></NoteItem>
                ))
              }
              <NoteItem isNew placeholder="Nova Tag" value={newTag} onChange={e => setNewTag(e.target.value)} onClick={handleAddTag}></NoteItem>
            </div>
          </Section>
          <Button title="Salvar" onClick={handleNewNote}></Button>
        </Form>
      </main>
    </Container>
  )
}