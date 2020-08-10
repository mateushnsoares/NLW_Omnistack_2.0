import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
  },

  teacherList: {
    marginTop: -40,
    padding: 16,
  },

  teacherItem: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  searchForm: {
    marginBottom: 24,
  },

  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
  },

  input: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBlock: {
    width: '48%',
  },

  submitButton: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 32,
    backgroundColor: '#04d361',
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  submitButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#fff',
  },
})
