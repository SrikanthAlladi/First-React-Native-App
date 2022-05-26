import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import {useStyles} from './app.styles';
import {TextComponent} from './components/TextComponent';

const App = () => {
  // styling access from the styles page.
  const styles = useStyles;

  // rendering the complete html content.
  return (
    <View style={styles.container}>
      <TextComponent />
      <StatusBar style="auto" />
    </View>
  );
};
export default App;
