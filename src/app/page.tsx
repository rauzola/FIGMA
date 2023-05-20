import React from "react";

export default function Home() {
  return (
    <>
      <header>
        <div className="container">
          <img
            src="/logo.svg"
            alt="Tom's Jazz School"
            width="106"
            height="44"
          />
          <nav>
            <a href="#">Início</a>
            <a href="#">Cursos</a>
            <a href="#">Eventos</a>
            <a href="#">Contato</a>
          </nav>
          <a href="#" className="button mt-1 mb-1 mx-auto">
            Se inscreva
          </a>
        </div>
      </header>
      <main>
        <section className="hero-section">
          <div className="container row-reverse">
            <img src="/hero-img.svg" alt="Banda de jazz tocando" />
            <div>
              <h1 className="mt-2">
                Crie algo{" "}
                <span className="text-primary decoration">impactante</span> com
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
          </div>
        </section>
        <section className="courses-section">
          <div className="cards">
            <article className="card">
              <img
                src="/piano.png"
                alt="ícone de teclas de piano"
                height="48"
                width="48"
              />
              <strong>Piano popular</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore
                magna aliqua.
              </p>
              <a href="#">
                <img
                  src="/arrow-right.svg"
                  alt="Ir para página do curso"
                  height="48"
                  width="48"
                />
              </a>
            </article>
            <article className="card">
              <img
                src="/clef.png"
                alt="ícone da clave de sol"
                height="48"
                width="48"
              />
              <strong>Teoria musical</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore
                magna aliqua.
              </p>
              <a href="#">
                <img
                  src="/arrow-right.svg"
                  alt="Ir para página do curso"
                  height="48"
                  width="48"
                />
              </a>
            </article>
            <article className="card">
              <img
                src="/sax.png"
                alt="ícone de saxofone"
                height="48"
                width="48"
              />
              <strong>Sax alto</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore
                magna aliqua.
              </p>
              <a href="#">
                <img
                  src="/arrow-right.svg"
                  alt="Ir para página do curso"
                  height="48"
                  width="48"
                />
              </a>
            </article>
            <article className="card">
              <img
                src="/drums.png"
                alt="ícone de bateria"
                height="48"
                width="48"
              />
              <strong>Bateria</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore
                magna aliqua.
              </p>
              <a href="#">
                <img
                  src="/arrow-right.svg"
                  alt="Ir para página do curso"
                  height="48"
                  width="48"
                />
              </a>
            </article>
          </div>

          <h2 className="text-center">
            E <span className="text-primary">varios</span> outros!
          </h2>
          <a href="#" className="button mt-2 mx-auto">
            Conhecer cursos
          </a>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="about-column">
            <img
              src="/logo.svg"
              alt="Tom's Jazz School"
              className="mt-1 mb-1"
              width="106"
              height="44"
            />
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <nav className="mb-2">
            <a href="#">Início</a>
            <a href="#">Cursos</a>
            <a href="#">Eventos</a>
            <a href="#">Contato</a>
          </nav>
          <form className="newsletter-form">
            <label className="mb-1">
              Receba materiais gratuitos no seu email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="mb-1"
              placeholder="Digite o seu e-mail"
            />
            <button className="button mb-2">Quero receber</button>
          </form>
        </div>
      </footer>
    </>
  );
}
