function ErrorPage({error}) {
    return (
      <section className="error-page">
        <img src="https://media.tenor.com/fd-UxMnAN9oAAAAC/taylor-swift-im-sorry.gif" alt="sad Taylor Swift with sorry sign"/>
        <h3>{error}</h3>
      </section>
    );
}

export default ErrorPage;