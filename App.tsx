import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import favoriteRadio from './favorito.png';
import favoriteTab from './grande-estrela-favorita.png'
import premiumTab from './conteudo-premium.png';
import searchIcon from './big-search-len.png';

interface SearchScreenProps {}

const SearchScreen: React.FC<SearchScreenProps> = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log(`Pesquisando por: ${searchText}`);
  };

  const recommendedRadios = [
    { id: '1', name: 'Radio Trooper' },
    { id: '2', name: 'Jovem Coruscant' },
    { id: '3', name: 'C-3PO N' },
    { id: '4', name: 'Palpatine o Dia' },
    { id: '5', name: 'Conselho Jedi FM' },
    { id: '6', name: 'Death Star 1' },
    { id: '7', name: 'Radio Mercenarios' },
    { id: '8', name: 'FM Tatooine' },
  ];

  const renderRecommendedRadioItem = ({ item }: { item: { id: string; name: string } }) => (
    <TouchableOpacity style={styles.recommendedRadioItem}>
      <Text style={styles.recommendedRadioText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchTextInput}
          placeholder="Buscar"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

      <FlatList
        data={recommendedRadios}
        renderItem={renderRecommendedRadioItem}
        keyExtractor={(item) => item.id}
        style={styles.recommendedRadiosContainer}
      />

      
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Text style={styles.bottomBarButtonText}>Favoritos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Text style={styles.bottomBarButtonText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton}>
          <Text style={styles.bottomBarButtonText}>Premium</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchScreen;