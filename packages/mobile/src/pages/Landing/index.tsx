import React, { useState, useEffect } from 'react'
import { View, Image, Text, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import api from '../../services/api'

import styles from './styles'

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0)

  const { navigate } = useNavigation()

  useEffect(() => {
    api.get('connections').then(({ data }) => {
      setTotalConnections(data.totalConnections)
    })
  }, [])

  function handleNavigateToStudy() {
    navigate('Study')
  }

  function handleNavigateToGiveClasses() {
    navigate('GiveClasses')
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />

      <Text style={styles.title}>
        Seja bem vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer ?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToStudy}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton
          onPress={handleNavigateToGiveClasses}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas{' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  )
}

export default Landing
