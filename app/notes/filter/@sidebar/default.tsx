import Link from "next/link";
import css from "./SidebarNotes.module.css";

export default function SidebarNotes() {
  const TAGS = ["All", "Todo", "Work", "Personal", "Meeting", "Shopping"];

  return (
    <ul className={css.menuList}>
      {TAGS.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <Link
            href={`/notes/filter/${tag === "All" ? "all" : tag}`}
            className={css.menuLink}
          >
            {tag === "All" ? "All notes" : tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
