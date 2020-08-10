import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from '@unform/web'

import PageHeader from '../../components/PageHeader'

import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import warningIcon from '../../assets/images/icons/warning.svg'

import api from '../../services/api'

import './styles.css'

interface IScheduleItem {
  week_day: number
  from: string
  to: string
}

interface IFormData {
  name: string
  avatar: string
  bio: string
  whatsapp: string
  subject: string
  cost: string
  schedule: IScheduleItem[]
}

const TeacherForm: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState(1)

  const history = useHistory()

  function handleNewScheduleItemButtonClick() {
    setScheduleItems(scheduleItems + 1)
  }

  function handleCreateClass(data: IFormData) {
    const formatedData: IFormData = {
      ...data,
      schedule: data.schedule.map((schedule) => ({
        ...schedule,
        week_day: Number(schedule.week_day),
      })),
    }

    api
      .post('classes', formatedData)
      .then(() => {
        alert('Cadastro realizado com sucesso!')
        history.push('/')
      })
      .catch(() => {
        alert('Erro no cadastro!')
      })
  }

  return (
    <div id='page-teacher-form' className='container'>
      <PageHeader title='Que incrível que você quer dar aulas.'>
        <p>O primeiro passo, é preencher esse formulário de inscrição.</p>
      </PageHeader>
      <main>
        <Form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input name='name' label='Nome' required />
            <Input name='avatar' label='Avatar' required />
            <Input name='whatsapp' label='Whatsapp' required />
            <Textarea name='bio' label='Biografia' />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
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
            <Input name='cost' label='Custo da hora por aula' required />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponiveis
              <button type='button' onClick={handleNewScheduleItemButtonClick}>
                + Novo horário
              </button>
            </legend>

            {Array.from({ length: scheduleItems }).map((_, index) => (
              <div key={index} className='schedule-item'>
                <Select
                  name={`schedule[${index}].week_day`}
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
                <Input
                  type='time'
                  name={`schedule[${index}].from`}
                  label='Das'
                  required
                />
                <Input
                  type='time'
                  name={`schedule[${index}].to`}
                  label='Até'
                  required
                />
              </div>
            ))}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt='Aviso Importante' />
              Importante! <br />
              Preencha todos os campos
            </p>
            <button type='submit'>Salvar Cadastro</button>
          </footer>
        </Form>
      </main>
    </div>
  )
}

export default TeacherForm
