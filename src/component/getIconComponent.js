import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const getIconComponent = (lib) => {
  switch (lib) {
    case "Ionicons":
      return Ionicons;
    case "MaterialIcons":
      return MaterialIcons;
    case "FontAwesome":
      return FontAwesome;
    case "MaterialCommunityIcons":
      return MaterialCommunityIcons;
    default:
      return null;
  }
};

export default getIconComponent
