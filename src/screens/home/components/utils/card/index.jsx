import { Link } from "react-router-dom";
import styles from "./card.module.css";

export default function TicketCard({
  title,
  desc,
  priority,
  status,
  deleteClick,
  toHref,
  prColor,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <h4 className={styles.card_title}>{title}</h4>
        <div className="flex-div justify-between">
          <p
            className={`font-bold uppercase px-2 ${
              prColor === "yes" ? "text-green-700" : "text-red-700"
            }`}
          >
            {priority}
          </p>
          <p className="px-2 text-blue-800 font-medium">{status}</p>
        </div>
      </div>
      <div className={styles.card_body}>
        <p className="text-gray-500 text-base">{desc}</p>
      </div>
      <div className={styles.card_footer}>
        <Link to={toHref} className={styles.card_footer__edit}>
          Edit
        </Link>
        <button
          className={styles.card_footer__delete}
          onClick={() => deleteClick()}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
