import {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {useStyles} from './index.styles';

export const TextComponent = () => {
  // initializing the state variable and state function.
  // initially assigning the empty string to text.
  const [text, setNewText] = useState<string>('');

  // styling access from the styles page.
  const styles = useStyles;

  useEffect(() => {
    console.log('inside useEffect...');
    setNewText('My Name is Goud...');
  }, [setNewText]);

  // rendering the complete html content.
  return (
    <>
      <Text style={styles.pretextcss}>
        This is my first react native project.
        {/* <pre>{text}</pre> */}
      </Text>

      <Text style={styles.pretextcss}>{text}</Text>
    </>
  );
};
export default TextComponent;
