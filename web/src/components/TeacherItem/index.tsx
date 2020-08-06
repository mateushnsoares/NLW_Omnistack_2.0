import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

interface Props {
  name: string
  avatar: string
  subject: string
  bio: string
  cost: string
  whatsapp: string
}

const TeacherItem: React.FC<Props> = ({
  name,
  avatar,
  subject,
  bio,
  cost,
  whatsapp,
}) => {
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
        <a href={`https://wa.me/${whatsapp}`}>
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem
