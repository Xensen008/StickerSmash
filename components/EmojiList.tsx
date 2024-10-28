import { useState } from 'react';
import { StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Asset } from 'expo-asset';

type Props = {
  onSelect: (image: string) => void;
  onCloseModal: () => void;
};

// Import images statically
const emojiImages = [
  require('../assets/images/images/emoji1.png'),
  require('../assets/images/images/emoji2.png'),
  require('../assets/images/images/emoji3.png'),
  require('../assets/images/images/emoji4.png'),
  require('../assets/images/images/emoji5.png'),
  require('../assets/images/images/emoji6.png'),
];

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emojiImages}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(Asset.fromModule(item).uri); // Ensure item is a string URI
            onCloseModal();
          }}>
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});