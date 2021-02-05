import React from "react";
import AppCard from "../components/AppCard";
import Clock from "../components/Clock";
import JourneyTime from "../components/JourneyTime";
import TFLStatus from "../components/TFLStatus";
import Weather from "../components/Weather";
import styles from "../styles/Homepage.module.scss";

const Homepage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>
          <Clock />
        </h1>
        <Weather />
        <br />
        <JourneyTime />
        <br />
        <TFLStatus />
      </div>
      <br />
      <div className={styles.apps}>
        <AppCard
          name="Plex"
          url="https://app.plex.tv/"
          className={styles.plex}
        />
        <AppCard
          name="Home Assistant"
          url="/hass"
          className={styles.homeassistant}
        >
          <img src="/images/homeassistant.png" />
        </AppCard>

        <AppCard name="Unifi" url="/unifi" className={styles.unifi} />
        <AppCard name="uTorrent" url="/utorrent" className={styles.utorrent} />
        <AppCard name="Sonarr" url="/sonarr" className={styles.sonarr} />
        <AppCard name="Radarr" url="/radarr" className={styles.sonarr} />
        <AppCard
          name="Portainer"
          url="/portainer"
          className={styles.portainer}
        />
        <AppCard name="Tautulli" url="/tautulli" className={styles.tautilli} />
        <AppCard name="Hyperion" url="/hyperion" className={styles.hyperion} />
        <AppCard
          name="Goodlord"
          url="https://foliolondon.goodlord.co/#/login"
          className={styles.goodlord}
        />
      </div>
    </div>
  );
};

export default Homepage;
