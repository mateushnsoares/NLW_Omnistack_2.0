import React, { useState } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { RectButton, BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import api from '../../services/api'

import ITeacher from '../../interfaces/ITeacher'

import styles from './styles'

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(true)

  const [teachers, setTeachers] = useState<ITeacher[]>([])
  const [favorites, setFavorites] = useState<number[]>([])

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((res) => {
      if (res) {
        setFavorites(
          JSON.parse(res)
            .map(
              (
                { user_id }: { user_id: number }
              ) => user_id
            )
        )
      }
    })
  }

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible)
  }

  function handleFiltersSubmit() {
    loadFavorites()
    api
      .get('classes', {
        params: {
          subject,
          week_day,
          time,
        },
      })
      .then(({ data }) => {
        setTeachers(data)
      })

    handleToggleFiltersVisible()
  }

  return (
    <ScrollView style={styles.container}>
      <PageHeader
        title='Proffys Disponíveis'
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name='filter' size={20} color='#fff' />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              value={subject}
              onChangeText={setSubject}
              style={styles.input}
              placeholder='Qual materia ?'
              placeholderTextColor='#c1bccc'
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  value={week_day}
                  onChangeText={setWeekDay}
                  style={styles.input}
                  placeholder='Qual o dia ?'
                  placeholderTextColor='#c1bccc'
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  value={time}
                  onChangeText={setTime}
                  style={styles.input}
                  placeholder='Qual hora ?'
                  placeholderTextColor='#c1bccc'
                />
              </View>
            </View>
            <RectButton
              style={styles.submitButton}
              onPress={handleFiltersSubmit}
            >
              <Text style={styles.submitButtonText}> Filtrar </Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={styles.teacherItem}
      >
        {teachers.map((teacher) => (
          <TeacherItem
            key={teacher.user_id}
            teacher={teacher}
            favorited={favorites.includes(teacher.user_id)}
          />
        ))}
      </ScrollView>
    </ScrollView>
  )
}

export default TeacherList
