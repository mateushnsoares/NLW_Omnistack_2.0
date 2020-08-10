import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },

  avatar: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#32264d',
  },

  subject: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#6a6180',
    marginTop: 4,
  },

  bio: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    color: '#6a6180',
    marginHorizontal: 24,
  },

  footer: {
    backgroundColor: '#fafafc',
    padding: 24,
    alignItems: 'center',
    marginTop: 24,
  },

  price: {
    fontFamily: 'Poppins_400Regular',
    color: '#6a6180',
    fontSize: 14,
  },

  priceValue: {
    fontFamily: 'Archivo_700Bold',
    color: '#8257e5',
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  favoriteButton: {
    backgroundColor: '#8257e5',
    height: 56,
    width: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  favorited: {
    backgroundColor: '#e33d3d',
  },

  contactButton: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 32,
    backgroundColor: '#04d361',
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  contactButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#fff',
    marginLeft: 16,
  },
})
