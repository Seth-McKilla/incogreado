const styles = {
  footer: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div>
        Made with{" "}
        <span role="img" alt="heart">
          ❤️
        </span>{" "}
        by{" "}
        <a
          href="https://github.com/Seth-McKilla"
          target="_blank"
          rel="noreferrer"
        >
          Seth
        </a>
      </div>
    </footer>
  );
}
