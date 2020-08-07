import React, { useState } from 'react'
import { Form } from '@unform/web'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import api from '../../services/api'

import './styles.css'
interface IFormData {
  subject: string
  week_day: string
  time: string
}

interface ITeacher {
  id: number
  subject: string
  cost: string
  user_id: number
  name: string
  avatar: string
  whatsapp: string
  bio: string
}

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState<ITeacher[]>([])

  async function handleSubmit(data: IFormData) {
    try {
      const { data: response } = await api.get('classes', {
        params: data,
      })

      setTeachers(response)
    } catch (err) {
      alert('Error on seach')
    }
  }

  return (
    <div id='page-teacher-list' className='container'>
      <PageHeader title='Esses são os Proffys disponíveis'>
        <Form onSubmit={handleSubmit} id='search-teachers'>
          <Select
            name='subject'
            label='Matéria'
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Quimica', label: 'Quimica' },
              { value: 'Física', label: 'Física' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
            ]}
          />
          <Select
            name='week_day'
            label='Dia da Semana'
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sabado' },
            ]}
          />
          <Input type='time' name='time' label='Hora' />
          <div className='button-block'>
            <button type='submit'>Buscar</button>
          </div>
        </Form>
      </PageHeader>

      <main>
        {teachers.map((teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={{
              id: teacher.id,
              name: teacher.name,
              avatar: teacher.avatar,
              subject: teacher.subject,
              bio: teacher.bio,
              cost: teacher.cost,
              whatsapp: teacher.whatsapp,
            }}
          />
        ))}
      </main>
    </div>
  )
}

export default TeacherList
