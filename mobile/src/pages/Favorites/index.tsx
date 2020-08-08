import React, { useState, useCallback } from 'react'
import { View, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { useFocusEffect } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import ITeacher from '../../interfaces/ITeacher'

import styles from './styles'

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<ITeacher[]>([])

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((res) => {
      if (res) {
        setFavorites(
          JSON.parse(res)
        )
      }
    })
  }

  useFocusEffect(
    useCallback(loadFavorites, [])
  )

  return (
    <View style={styles.container}>
      <PageHeader title='Meus proffys Favoritos' />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={styles.teacherItem}
      >
        {
          favorites?.map(favorite => (
            <TeacherItem
              key={favorite.user_id}
              teacher={favorite}
              favorited
            />
          ))
        }
      </ScrollView>
    </View>
  )
}

export default Favorites
