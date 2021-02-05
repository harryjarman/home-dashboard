import filter from "lodash/filter";

const headers = new Headers({
  Authorization: `Bearer ${process.env.HASS_TOKEN}`,
});

export default async (req, res) => {
  switch (req.method) {
    case "GET": {
      const stateResponse = await fetch(`${process.env.HASS_URL}/api/states`, {
        method: "get",
        headers,
      });
      const hass_states = await stateResponse.json();

      const line_entities = [
        "sensor.jubilee",
        "sensor.central",
        "sensor.london_overground",
        "sensor.metropolitan",
        "sensor.northern",
        "sensor.piccadilly",
        "sensor.bakerloo",
        // "sensor.tfl_rail",
        "sensor.dlr",
        "sensor.london_overground",
        "sensor.circle",
        "sensor.district",
        // "sensor.waterloo_city",
        // "sensor.hammersmith_city",
        "sensor.victoria",
      ];

      res.json(
        hass_states.filter((state) => line_entities.includes(state.entity_id))
      );
      break;
    }
    default:
      res.status(404).send("Not found");
  }
};
