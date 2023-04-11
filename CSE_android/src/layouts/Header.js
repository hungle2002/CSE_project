import { Text, TextInput, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
export default Header = function ({ title }) {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("pt-12 px-6")}>
      <View style={tailwind("flex flex-row justify-between")}>
        <Text style={tailwind("text-3xl font-extrabold text-green-600")}>
          {title}
        </Text>
        <View>
          <FontAwesomeIcon icon={faBell} size={30} color="green" />
          <Text
            style={tailwind(
              "text-black text-xs font-semibold absolute -right-1 -top-0.5 rounded-full px-1 bg-blue-300"
            )}
          >
            4
          </Text>
        </View>
      </View>
    </View>
  );
};
