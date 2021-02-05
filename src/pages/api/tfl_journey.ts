export default async (req, res) => {
  switch (req.method) {
    case "GET": {
      const stationCodeStratford = "1000226";
      const stationCodeTCR = "1000235";
      const journeyResponse = await fetch(
        `https://api.tfl.gov.uk/journey/journeyresults/${stationCodeStratford}/to/${stationCodeTCR}?app_id=${process.env.TFL_APP_ID}&app_key=${process.env.TFL_PRIMARY_KEY}`
      );
      const journeyDetails = await journeyResponse.json();
      const journey_time = Math.ceil(
        journeyDetails.journeys.reduce((aggr, value) => {
          return aggr + value.duration;
        }, 0) / journeyDetails.journeys.length
      );
      res.json({ tflResponse: journeyDetails, journey_time });
      break;
    }
    default: {
      res.status(404).send("Not found");
    }
  }
};
