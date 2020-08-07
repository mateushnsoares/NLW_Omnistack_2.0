import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import api from '../../services/api'

import './styles.css'

interface ITeacher {
  id: number
  name: string
  avatar: string
  subject: string
  bio: string
  cost: string
  whatsapp: string
}

interface Props {
  teacher: ITeacher
}

const TeacherItem: React.FC<Props> = ({
  teacher: { id, name, avatar, subject, bio, cost, whatsapp },
}) => {
  function handleCreateNewConnection() {
    api.post('connections', {
      user_id: id,
    })
  }

  return (
    <article className='teacher-item'>
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>
      <p>{bio}</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {cost}</strong>
        </p>
        <a
          target='_blank'
          onClick={handleCreateNewConnection}
          href={`https://wa.me/${whatsapp}`}
        >
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem
