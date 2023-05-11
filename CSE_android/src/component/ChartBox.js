import { LineChart } from "react-native-chart-kit";
import { Dimensions, View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

const ChartBox = ({title, data, color}) => {

  const tailwind = useTailwind();

  return (
    <View>
          <Text style={tailwind("mt-4")}>{title}</Text>
          <LineChart
            data={data}
            width={Dimensions.get("window").width * 0.9}
            height={220}
            chartConfig={{
              backgroundGradientFrom: "white",
              backgroundGradientTo: "white",
              decimalPlaces: 0,
              color: (opacity = 1) => `black`,
              labelColor: (opacity = 1) => `black`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "4",
                strokeWidth: "1",
              },
              fillShadowGradientTo: "white",
              fillShadowGradientFrom: color
            }}
            fromZero
            style={{
              marginVertical: 8,
              borderRadius: 5
            }}
            withVerticalLines={false}
          />
        </View>
  )
}

export default ChartBox