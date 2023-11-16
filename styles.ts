import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    backgroundColor: '#eef1ef',
  },
  searchBarContainer: {
    backgroundColor: 'rgb(137,207,240)',
    paddingVertical: 15,
    borderRadius: 0,
    marginBottom: 0,
    width: '100%',
  },
  searchTextInput: {
    height: 45,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 2,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

searchIcom:{
  width: 10,
  height: 10
},

  recommendedRadiosContainer: {
    marginTop: 16,
    width: '90%', 
  },
  recommendedRadiosTitle: {
    fontSize: 20,
    marginBottom: 8,
  },
  recommendedRadioItem: {
    marginBottom: 15,
    height: 60,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  recommendedRadioText: {
    fontSize: 18,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#cdcdcd', 
    bottom: 0,
  },
  bottomBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBarButtonText: {
    color: 'rgb(255,255,255)',
    fontSize: 16,
  },
});

export default styles;
