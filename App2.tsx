import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import radioStyles from './radioStyles';
import deathStar from './estrelaDaMorte.png';
import transmite from './antena-parabolica.png';
import favorite from './grande-estrela-favorita.png';
import pause from './pausa.png';
import sleep from './sleep.png';
import share from './compartilhar.png';
import back from './volte.png';

interface RadioScreenProps { }

const RadioScreen: React.FC<RadioScreenProps> = () => {


  const handleTransmite = () => {
    console.log('Transmite');
  };

  const handleFavorite = () => {
    console.log('Favorite');
  };

  const handlePause = () => {
    console.log('Pause');
  };

  const handleSleep = () => {
    console.log('Sleep');
  };

  const handleShare = () => {
    console.log('Share');
  };

  return (



    <View style={radioStyles.container}>
      <View style={radioStyles.deathStar}>
        <Image source={deathStar} style={radioStyles.image} />
        <Text style={radioStyles.title}>Death Star FM</Text>
        <Text style={radioStyles.text}>FM 110,5</Text>
        <Text style={radioStyles.show}>A hora do Darth</Text>
      </View>

      <View style={radioStyles.horizontal}>
        <TouchableOpacity onPress={handleTransmite}>
          <Image source={transmite} style={radioStyles.button} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFavorite}>
          <Image source={favorite} style={radioStyles.button} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePause}>
          <Image source={pause} style={radioStyles.button} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSleep}>
          <Image source={sleep} style={radioStyles.button} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleShare}>
          <Image source={share} style={radioStyles.button} />
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default RadioScreen;