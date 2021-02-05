const headers = new Headers({
  Authorization: `Bearer ${process.env.HASS_TOKEN}`,
});

export default async (req, res) => {
  switch (req.method) {
    case "GET": {
      const configResponse = await fetch(`${process.env.HASS_URL}/api/config`, {
        method: "get",
        headers,
      });

      const {
        unit_system: { temperature },
      } = await configResponse.json();

      const weatherResponse = await fetch(
        `${process.env.HASS_URL}/api/states/weather.home`,
        {
          method: "get",
          headers,
        }
      );
      const weather = await weatherResponse.json();
      res.json({ weather, temperature_unit: temperature });
      break;
    }
    default: {
      res.status(404).send("Not found");
    }
  }
};
