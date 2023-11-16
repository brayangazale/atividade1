import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: 'rgb(137,207,240)'
  },

  arrowBack: {
    width: 10,
    height: 10
  },

  deathStar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
  },

  text: {
    fontSize: 14,
    marginBottom: 6
  },
  show: {
    fontSize: 10,
    marginBottom: 4
  },
  button: {
    backgroundColor: 'lightblue',
    //paddingVertical: 10,
    //paddingHorizontal: 20,
    borderRadius: 50,
    width: 50,
    height: 50,
    margin: 5

  },
  image: {

    width: 200,
    height: 200
  },
  horizontal: {
    flexDirection: 'row', 
    marginTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

  }
});
