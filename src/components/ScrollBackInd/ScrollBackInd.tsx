"use client";
import styles from "./ScrollBackInd.module.css";

export default function ScrollBackInd<T>({
  hide = false,
  scroll,
  player,
  time,
}: {
  hide?: boolean;
  scroll: HTMLElement | null;
  player?: { [key: string]: any } | null | undefined;
  time: string;
}) {
  return (
    <button
      aria-hidden="true"
      className={`${styles.ScrollBackInd} ${
        hide ? styles.ScrollBackIndHidden : ""
      }`}
      onClick={() => scroll?.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      <span className={`icon`}>arrow_upward</span>
      <span>{time}</span>
      {player &&
      player?.recenttracks.track[0]["@attr"]?.nowplaying === "true" ? (
        <img
          className={styles.ScrollBackIndAlbumArt}
          src={player?.recenttracks.track[0].image[1]["#text"]}
          alt=""
        ></img>
      ) : (
        <></>
      )}
    </button>
  );
}
