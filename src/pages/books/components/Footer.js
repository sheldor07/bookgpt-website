import homeStyles from "../styles/Home.module.css";
export default function Footer() {
    return(<footer
        id="footer"
        className={homeStyles.footer}
        style={{ textAlign: "center" }}
      >
        Created with 💙 by{" "}
        <a
          style={{ textDecoration: "underline" }}
          target="__blank"
          href="https://manasbam.com"
        >
          Manas
        </a>{" "}
        and{" "}
        <a
          target="__blank"
          style={{ textDecoration: "underline" }}
          href="https://github.com/sheldor07"
        >
          Yajat
        </a>
      </footer>)
}