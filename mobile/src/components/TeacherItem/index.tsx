import React, { useState } from 'react'
import { View, Image, Text, Linking } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-community/async-storage'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import ITeacher from '../../interfaces/ITeacher'

import styles from './styles'
import api from '../../services/api'

interface IProps {
  teacher: ITeacher
  favorited: boolean
}

const TeacherItem: React.FC<IProps> = ({
  teacher,
  favorited,
}) => {
  const [isFavorited, setIsFavorited] = useState(favorited)

  function handleLinkToWhatsapp() {
    api.post('connections', {
      user_id: teacher.id
    })


    Linking.openURL(`whatsapp://send?phone=+55${teacher.whatsapp}`)
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites')

    let favoritesArray: ITeacher[] = []

    if (favorites) {
      favoritesArray = JSON.parse(favorites) as ITeacher[]
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray
        .findIndex(
          (teacherItem) => teacherItem.id === teacher.id
        )

      favoritesArray.splice(favoriteIndex, 1);

    } else {
      favoritesArray?.push(teacher)
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
    setIsFavorited(!isFavorited)
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={{ uri: teacher.avatar }} style={styles.avatar} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>{teacher.cost}</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton
            style={
              [styles.favoriteButton, isFavorited ? styles.favorited : null]
            }
            onPress={handleToggleFavorite}
          >
            {isFavorited ?
              <Image source={unfavoriteIcon} /> :
              <Image source={heartOutlineIcon} />
            }
          </RectButton>

          <RectButton
            style={styles.contactButton}
            onPress={handleLinkToWhatsapp}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem
