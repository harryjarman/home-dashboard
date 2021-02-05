import React from "react";
import AppCard from "../components/AppCard";
import Clock from "../components/Clock";
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
      </div>
      <div className={styles.apps}>
        <AppCard
          name="Plex"
          url="https://app.plex.tv/"
          className={styles.plex}
        />
        <AppCard
          name="Home Assistant"
          url="http://192.168.1.100:8123"
          className={styles.homeassistant}
        >
          <img src="/images/homeassistant.png" />
        </AppCard>

        <AppCard
          name="Unifi"
          url="http://192.168.1.1"
          className={styles.unifi}
        />
        <AppCard
          name="uTorrent"
          url="http://192.168.1.2:9091/gui"
          className={styles.utorrent}
        />
        <AppCard
          name="Sonarr"
          url="http://192.168.1.2:8989/"
          className={styles.sonarr}
        />
        <AppCard
          name="Radarr"
          url="http://192.168.1.2:8988/"
          className={styles.sonarr}
        />
        <AppCard
          name="Portainer"
          url="http://192.168.1.2:9000/"
          className={styles.portainer}
        />
        <AppCard
          name="Hyperion"
          url="http://192.168.1.61:8090/"
          className={styles.hyperion}
        />
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
