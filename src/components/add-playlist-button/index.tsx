import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { setAddPlaylistModalOpen } from '../../redux';
import styles from './styles';

const AddTodoButton = () => {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setAddPlaylistModalOpen(true));
  }

  return (
    <TouchableOpacity onPress={openModal}>
      <Ionicons name='ios-add-circle' style={styles.addButton} />
    </TouchableOpacity>
  );
};

export default AddTodoButton;
