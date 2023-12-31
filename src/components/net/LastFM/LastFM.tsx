"use client";
import styles from "./LastFM.module.css";

export default function LastFM({
  player,
}: {
  player: { [key: string]: any } | null | undefined;
}) {
  return player != null ? (
    <>
      {player?.recenttracks.track[0]["@attr"]?.nowplaying === "true" ? (
        <p>Currently listening to</p>
      ) : (
        <p className="hv">Last listened to</p>
      )}
      <div className={`${styles.LastFM} LFM-collapse-on-a11y`}>
        <div className={styles.LastFMMetadata}>
          <p className={styles.LastFMMetadataTitle}>
            {player?.recenttracks.track[0].name}
          </p>
          <p className={styles.LastFMMetadataArtist}>
            {player?.recenttracks.track[0].artist.name} -{" "}
            {player?.recenttracks.track[0].album["#text"]}
          </p>
        </div>
        <img
          className={`${styles.LastFMAlbumArt} LFMA-collapse-on-a11y`}
          src={player?.recenttracks.track[0].image[2]["#text"]}
          alt=""
          width="96"
          height="96"
        ></img>
      </div>
    </>
  ) : (
    <p className="hv">Hold on...</p>
  );
}
