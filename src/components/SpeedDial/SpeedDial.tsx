import styles from "./SpeedDial.module.css";

export default function SpeedDial({
  services,
}: {
  services: {
    name: string;
    url?: string;
    golden?: boolean;
    purpose?: string;
  }[];
}) {
  return (
    <ul className={styles.SpeedDial}>
      {services.map((service, iter) => (
        <li
          className={`${styles.SpeedDialService} ${
            service.golden ? styles.SpeedDialServiceGolden : ""
          }`}
          key={iter}
        >
          {service.purpose ? (
            <p className={styles.SpeedDialServicePurpose}>{service.purpose}</p>
          ) : (
            <></>
          )}
          {service.url ? (
            <a target="_blank" href={service.url} className="special">
              {service.name}
            </a>
          ) : (
            service.name
          )}
        </li>
      ))}
    </ul>
  );
}
