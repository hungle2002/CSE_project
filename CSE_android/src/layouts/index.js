import Header from "./Header";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

function DefaultLayouts({ children, title }) {
  const tailwind = useTailwind();
  return (
    <View>
      <View>
        <Header title={title} />
      </View>
      <View tyle={tailwind("h-20")}>{children}</View>
    </View>
  );
}

export default DefaultLayouts;
