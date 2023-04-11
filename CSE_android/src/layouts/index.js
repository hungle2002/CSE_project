import Header from "./Header";
import { View } from "react-native";

function DefaultLayouts({ children, title }) {
  return (
    <View>
      <Header title={title} />
    </View>
  );
}

export default DefaultLayouts;
