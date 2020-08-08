import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#8257e5',
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,
    color: '#fff',
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
    alignSelf: 'flex-start',
  },
})
