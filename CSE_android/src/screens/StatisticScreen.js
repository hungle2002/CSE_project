import { Text, View, ScrollView } from "react-native";
import { useTailwind } from "tailwind-rn";
import ChartBox from "../component/ChartBox";

const powerConsumption = {
  labels: ["01/3", "02/3", "03/3", "04/3", "05/3", "06/3", "07/3"],
  datasets: [
    {
      data: [2000, 14000, 4000, 4020, 10000, 8000, 12000],
      color: () => "black"
    }
  ]
}

const temperatureData = {
  labels: ["01/3", "02/3", "03/3", "04/3", "05/3", "06/3", "07/3"],
  datasets: [
    {
      data: [70, 40, 60, 23, 40, 23, 42],
      color: () => "red"
    },
  ],
};
const lightingData = {
  labels: ["01/3", "02/3", "03/3", "04/3", "05/3", "06/3", "07/3"],
  datasets: [
    {
      data: [70, 40, 60, 23, 40, 23, 42],
      color: () => "orange"
    },
  ],
};
const moistureData = {
  labels: ["01/3", "02/3", "03/3", "04/3", "05/3", "06/3", "07/3"],
  datasets: [
    {
      data: [70, 40, 60, 23, 40, 23, 42],
      color: () => "blue"
    },
  ],
};
const temperatureConsumption = {
  labels: ["01/3", "02/3", "03/3", "04/3", "05/3", "06/3", "07/3"],
  datasets: [
    {
      data: [2000, 14000, 4000, 4020, 10000, 8000, 12000],
      color: () => "red"
    }
  ]
}
const lightingConsumption = {
  labels: ["01/3", "02/3", "03/3", "04/3", "05/3", "06/3", "07/3"],
  datasets: [
    {
      data: [2000, 14000, 4000, 4020, 10000, 8000, 12000],
      color: () => "orange"
    }
  ]
}
const moistureConsumption = {
  labels: ["01/3", "02/3", "03/3", "04/3", "05/3", "06/3", "07/3"],
  datasets: [
    {
      data: [2000, 14000, 4000, 4020, 10000, 8000, 12000],
      color: () => "blue"
    }
  ]
}

function StatisticScreen() {
  const tailwind = useTailwind();

  return (
    <View
      style={tailwind(
        "w-full h-full flex flex-col justify-center items-center"
      )}
    >
      <ScrollView>
        <View
          style={tailwind(
            "w-full h-full flex flex-col justify-between"
          )}
        >
          <View style={tailwind("w-full")}>
            <Text style={tailwind("text-xl font-extrabold mt-3")}>Status</Text>
            <ChartBox data={temperatureData} title={"Temperature"} color={"red"} />
            <ChartBox data={lightingData} title={"Lighting"} color={"orange"} />
            <ChartBox data={moistureData} title={"Soil moisture"} color={"blue"} />
          </View>
          <View style={tailwind("w-full")}>
            <Text style={tailwind("text-xl font-extrabold mt-3")}>Consumption</Text>
            <ChartBox data={temperatureConsumption} title={"Temperature"} color={"red"} />
            <ChartBox data={lightingConsumption} title={"Lighting"} color={"orange"} />
            <ChartBox data={moistureConsumption} title={"Soil moisture"} color={"blue"} />
            <ChartBox data={powerConsumption} title={"Power"} color={"black"} />
          </View>
        </View>
      </ScrollView>
      
    </View>
  );
}

export default StatisticScreen;
