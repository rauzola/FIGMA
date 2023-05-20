import React from "react";

export default function Home() {
  return (
    <>
      <header>
        <img src="/logo.svg" alt="logo" />
        <nav className="mt-1 mx-auto">
          <a href="#">Inicio</a>
          <a href="#">Cursos</a>
          <a href="#">Eventos</a>
          <a href="#">Contato</a>
        </nav>
        <a href="#" className="button mt-1 mb-1 mx-auto">
          Se inscreva
        </a>
      </header>
      <main>
        <section className="hero-section">
          <img src="/hero-img.svg" alt="banda de jazz" />
          <div>
            <h1 className="mt-2">
              Crie algo <span className="text-primary decoration">impactante</span> com
              música
            </h1>
            <p className="mt-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="button">
              Comece agora
            </a>
          </div>
          <section className="courses-section">
            <div className="cards">
              <article>
                <img src="/piano.png" alt="piano" />
                <strong>Piano popular</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  dolore magna aliqua.
                </p>
                <a href="#">
                  <img src="/arrow-right.svg" alt="Ir para a pagina do curso" />
                </a>
              </article>
              <article>
                <img src="/clef.png" alt="clef" />
                <strong>Teoria musical</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  dolore magna aliqua.
                </p>
                <a href="#">
                  <img src="/arrow-right.svg" alt="Ir para a pagina do curso" />
                </a>
              </article>
              <article>
                <img src="/sax.png" alt="sax" />
                <strong>Sax alto</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  dolore magna aliqua.
                </p>
                <a href="#">
                  <img src="/arrow-right.svg" alt="Ir para a pagina do curso" />
                </a>
              </article>
              <article>
                <img src="/drums.png" alt="drums" />
                <strong>Bateria</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  dolore magna aliqua.
                </p>
                <a href="#">
                  <img src="/arrow-right.svg" alt="Ir para a pagina do curso" />
                </a>
              </article>
            </div>

            <h2>
              E <span className="text-primary"> Varios</span> outros!
            </h2>
            <a href="#">Conhecer os cursos</a>
          </section>
        </section>
      </main>

      <footer>
        <div>
          <img src="/logo.svg" alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <nav>
          <a href="#">Inicio</a>
          <a href="#">Cursos</a>
          <a href="#">Eventos</a>
          <a href="#">Contato</a>
        </nav>
        <form>
          <label htmlFor="email">Receba materiais gratuitos no seu email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
          />
        </form>
      </footer>
    </>
  );
}
