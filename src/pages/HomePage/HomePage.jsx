const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 45,
    textAlign: 'center',
  },
};

export default function HomePage() {
  return (
    <>
      <title>Welcome</title>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Contacts manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            ❤️✨
          </span>
        </h1>
      </div>
    </>
  );
}
