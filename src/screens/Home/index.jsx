import { useCallback, useState } from 'react';
import {ScrollView, View} from 'react-native';
import { Item } from '../../components';
import Styles from './styles';

const ITEM_WIDTH = 116

const Home = () => {
  const [lastVisibleItem, setLastVisibleItem] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(0)

  const handleScroll = (event) => {
    const currentMaxItem = getLastVisibleItem(event.nativeEvent.contentOffset.x)
    
    if (currentMaxItem > lastVisibleItem) {
      setLastVisibleItem(currentMaxItem)
    }
  }

  const onScrollLayout = (event) => {
    const { width } = event.nativeEvent.layout
    const currentMaxItem = getLastVisibleItem(width)
    
    setLastVisibleItem(currentMaxItem)
    setScrollWidth(width)
  }

  const getLastVisibleItem = useCallback((width) => {
    return Math.floor((scrollWidth + width) / ITEM_WIDTH) - 1
  }, [scrollWidth]);

  const onItemVisible = (position) => {
    console.log(`Item ${position} está visível!`)
  }

  return (
    <View>
      <ScrollView style={Styles.wrapper} horizontal 
        onScroll={handleScroll}
        onLayout={onScrollLayout}>
        <Item text="A" />
        <Item text="B" />
        <Item text="C" />
        <Item text="D" />
        <Item text="E" />
        <Item text="F" />
      </ScrollView>
    </View>
  );
};

export default Home