import PropTypes from "prop-types";
import ConditionBlock from "../../components/ConditionBlock";
import { useEffect, useState, useContext } from "react";
import { search } from "../../apiServices/searchService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureThreeQuarters,
  faCloudSun,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";
import config from "../../config";
import { SocketContext } from "../../context/socket";

function ConditionBlockHome({ className }) {
  const [conditionResult, setConditionResult] = useState([]);
  const [condtionValue, setConditionValue] = useState([0, 0, 0]);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await search({
          path: "condition",
        });
        setConditionResult(response.condition);
        setConditionValue([response.value.tempValue, response.value.lightValue, response.value.soilValue]);
        console.log(response);
      } catch (error) {
        console.log("error");
      }
    };
    fetchAPI();
  }, []);

  // listen to socket for change in condition
  const socket = useContext(SocketContext);
  socket.on("update_condition", (value) => setConditionValue(value));

  socket.on("update_all_settings", (value) => {
    console.log("This is all settings for update!");
    setConditionResult([value[0], value[1], value[2]]);
  });

  const conditionItem = [
    {
      icon: <FontAwesomeIcon icon={faTemperatureThreeQuarters} />,
      color: "black",
      condition: config.conditions.temperature,
      number: condtionValue[0],
      key : config.devicesKeys.tempSensor,
      ...conditionResult[0],
    },
    {
      icon: <FontAwesomeIcon icon={faCloudSun} />,
      color: "black",
      condition: config.conditions.light,
      number: condtionValue[1],
      key : config.devicesKeys.lightSensor,
      ...conditionResult[1],
    },
    {
      icon: <FontAwesomeIcon icon={faDroplet} />,
      color: "black",
      condition: config.conditions.moisture,
      number: condtionValue[2],
      key : config.devicesKeys.soilSensor,
      ...conditionResult[2],
    },
  ];
  return (
    <div className={className}>
      {conditionItem.map((item, index) => (
        <ConditionBlock key={index} item={item} />
      ))}
    </div>
  );
}

ConditionBlockHome.propTypes = {
  className: PropTypes.string,
};

export default ConditionBlockHome;
