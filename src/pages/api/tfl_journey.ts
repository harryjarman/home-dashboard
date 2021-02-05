export default async (req, res) => {
  switch (req.method) {
    case "GET": {
      const stationFrom = process.env.JRNY_EST_FROM;
      const stationTo = process.env.JRNY_EST_TO;
      const journeyResponse = await fetch(
        `https://api.tfl.gov.uk/journey/journeyresults/${stationFrom}/to/${stationTo}?app_id=${process.env.TFL_APP_ID}&app_key=${process.env.TFL_PRIMARY_KEY}`
      );
      const journeyDetails = await journeyResponse.json();
      const journey_time = Math.ceil(
        journeyDetails.journeys.reduce((aggr, value) => {
          return aggr + value.duration;
        }, 0) / journeyDetails.journeys.length
      );
      res.json({
        tflResponse: journeyDetails,
        journey_time,
        stationFrom,
        stationTo,
      });
      break;
    }
    default: {
      res.status(404).send("Not found");
    }
  }
};
