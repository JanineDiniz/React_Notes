import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import {FiPlus, FiSearch} from 'react-icons/fi'
import {Container, Brand, Menu, Search, Content, NewNote} from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import {Section} from '../../components/Section'
import { Note } from '../../components/Note'

import { api } from '../../services/api'

export function Home(){
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleTagsSelected(tagName){
    if(tagName === "all"){
      return setTagsSelected([])
    }

    const alreadySelected = tagsSelected.includes(tagName)

    if(alreadySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)
    }else{
     setTagsSelected(prevState => [...prevState, tagName])
    }
  }

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags(){
      const response = await api.get("/tags")
      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [tagsSelected, search])

  return(
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header></Header>

      <Menu>
        <li><ButtonText title="Todos" onClick={() => handleTagsSelected("all")} isActive={tagsSelected.length === 0} ></ButtonText></li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}><ButtonText title={tag.name} onClick={() => handleTagsSelected(tag.name)} isActive={tagsSelected.includes(tag.name)}></ButtonText></li>
          ))
        }
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo Título" icon={FiSearch} onChange={(e) => setSearch(e.target.value)}></Input>
      </Search>

      <Content>
        <Section title="Minhas notas">
          {
            notes.map(note => (
              <Note key={String(note.id)} data={note} onClick={() => handleDetails(note.id)}></Note>
            ))
          }
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus></FiPlus>
        Criar nota
      </NewNote>
    </Container>
  )
}