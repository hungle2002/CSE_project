import PropTypes from "prop-types";
import ConditionBlock from "../../components/ConditionBlock";
import { useEffect, useState } from "react";
import { search } from "../../apiServices/searchService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureThreeQuarters,
  faCloudSun,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";
import config from "../../config";

function ConditionBlockHome({ className }) {
  const [conditionResult, setConditionResult] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await search({
          path: "condition",
        });
        setConditionResult(response.condition);
      } catch (error) {
        console.log("error");
      }
    };

    fetchAPI();
    const getCondition = setInterval(async () => {
      await fetchAPI();
    }, 5000);

    return () => {
      clearInterval(getCondition);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const conditionItem = [
    {
      icon: <FontAwesomeIcon icon={faTemperatureThreeQuarters} />,
      color: "black",
      mode: config.modes.auto,
      condition: config.conditions.temprature,
      ...conditionResult[0],
    },
    {
      icon: <FontAwesomeIcon icon={faCloudSun} />,
      color: "black",
      mode: config.modes.schedule,
      condition: config.conditions.light,
      ...conditionResult[1],
    },
    {
      icon: <FontAwesomeIcon icon={faDroplet} />,
      color: "black",
      mode: config.modes.mannual,
      condition: config.conditions.moisture,
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
