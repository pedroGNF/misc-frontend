import Link from "next/link"
import Image from "next/future/image"
import susHome from "../public/TelaHome/susHome.png"
import esfHome from "../public/TelaHome/esfHome.png"
import acoesHome from "../public/TelaHome/acoesHome.png"
import FotoUsuario from "../public/Outros/eu.jpg"
import LogoGETA from "../public/Outros/logoGETA.png"
import LogoMisc from "../public/MiscLogos/MiscWebLogoBranca.jpg"

export const ftUser = {
  width: "7%",
  height: "auto",
  position: "absolute",
  left: "1245.8px",
  top: "130.0px",
  border: "4px solid white",
  borderRadius: "100% / 100%",
}
const lgMisc = {
  width: "auto",
  height: "25%",
  position: "absolute",
  left: "350.0px ",
  background: "",
  top: "155px",
  border: "1px solid #fff",
  borderRadius: "10% / 50%",
}

const lgGETA = {
  width: "8%",
  height: "auto",
  position: "absolute",
  background: "",
  top: "130px",
  left: "15.0px",
}

const ftSus = {
  width: "20%",
  height: "auto",
  position: "absolute",
  left: "50.0px",
  border: "2px solid black",
  borderRadius: "0% / 0%",
}

const ftEsf = {
  width: "20%",
  height: "auto",
  position: "absolute",
  Left: "50.0px",
  border: "2px solid black",
  borderRadius: "0% / 0%",
}

const ftAcoes = {
  width: "20%",
  height: "auto",
  position: "absolute",
  right: "50.0px",
  border: "2px solid black",
  borderRadius: "0% / 0%",
}

const navBar = {
  width: "100%",
  height: "10%",
  position: "fixed",
  borderRadius: "0% / 0%",
  background: "white",
  border: "1px solid black",
}

const cadastroBar = {
  width: "100%",
  height: "10%",
  position: "absolute",
  borderRadius: "0% / 0%",
  background: "lightgreen",
  top: "63px",
}

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="head">
          <div>
            <div>
              <nav style={navBar}>
                <Link href="/sus">
                  <a className="navBarSUS">SUS</a>
                </Link>

                <Link href="/esf">
                  <a className="navBarESF">Estratégia Saúde da Familia</a>
                </Link>

                <Link href="/acoes">
                  <a className="navBarAcoes">Ações à Comunidade</a>
                </Link>
              </nav>
              <nav style={cadastroBar}>
                <button className="btCadastrar">Cadastrar</button>
                <button className="btEntrar">Entrar</button>
              </nav>
            </div>
            <div>
              <Image src={FotoUsuario} style={ftUser} alt="Foto do Usuário" />
            </div>
            <div>
              <a href="https://geta.omnicesupa.com/">
                <Image
                  src={LogoGETA}
                  style={lgGETA}
                  alt="Logo do GETA"
                  sizes="100%"
                />
              </a>
            </div>
            <div>
              <a href="/home">
                <Image
                  src={LogoMisc}
                  style={lgMisc}
                  alt="Logo do MiscWeb"
                  sizes="100%"
                />
              </a>
            </div>

            <div className="titulo">
              <h1>Sua plataforma de aprendizado médico</h1>
            </div>

            <div className="subTitulo">
              <p className="description">
                Conheça mais sobre as páginas de educação médica abaixo:
              </p>
            </div>
          </div>
        </div>
        <main>
          <div>
            <Link href="/sus">
              <Image
                src={susHome}
                style={ftSus}
                alt="Link para a página SUS"
                sizes="100%"
              />
            </Link>

            <Link href="/esf">
              <Image
                src={esfHome}
                style={ftEsf}
                alt="Link para a página ESF"
                sizes="100%"
              />
            </Link>

            <Link href="/acoes">
              <Image
                src={acoesHome}
                style={ftAcoes}
                alt="Link para a página Ações à Comunidade"
                sizes="100%"
              />
            </Link>
          </div>

          <div className="grid">
            <a
              href="https://profes.com.br/aulas-particulares/medicina"
              className="card"
            >
              <h3>Professores ⇒</h3>
              <p>
                Escolha a o profissional que melhor atende a seus objetivos.
              </p>
            </a>

            <a
              href="https://blog.estacio.br/medicina/perfil-do-estudante-de-medicina/"
              className="card"
            >
              <h3>Alunos ⇒</h3>
              <p>
                Aprenda mais sobre o perfil ideal para um estudante de Medicina!
              </p>
            </a>

            <a
              href="https://www.cesupa.br/Graduacao/Biologicas/med.asp"
              className="card"
            >
              <h3>Estrutura ⇒</h3>
              <p>O que esperar encontrar no campus da faculdade?</p>
            </a>

            <a href="https://bit.ly/3qzikm8" className="card">
              <h3>Especializações ⇒</h3>
              <p>
                Conheça mais sobre a área medicinal que tens mais afinidade.
              </p>
            </a>
          </div>
          <p className="description">
            <code>MiscWeb-Corporation™ </code>
          </p>
        </main>
        <footer>
          <a href="http://misc.com/" target="pao" rel="noopener noreferrer">
            Powered by
            <img
              src="/miscLogos/MiscWebLogoPreta.jpg"
              alt="Site Misc"
              className="logo"
            />
          </a>
        </footer>
        <style jsx>{`
        .container {
          background: #F4FFFF;
        }
        .head {
          background: #0D99FF;
          height: auto;
        }
        .btCadastrar {
          position: absolute;
          borderRadius: 10% / 10%
          background: beige;
          left: 1200.0px;
          top: 20px;
          width: auto;
          height: 50%;
        }
        
        .btEntrar {
          position: absolute;
          borderRadius: 10% / 10%
          background: beige;
          left: 1280.0px;
          top: 20px;
          width: auto;
          height: 50%;
        }
        .titulo {
          justifyContent: center;
          textAlign: center;
          padding: 370px;
          fontsize: 95px;
          color: #C0FC91;
          margin-bottom: 1px;
        }
        .subTitulo {
         
          text-align: center;
          color: white;
          font-size: 10px;
          margin-bottom: 100px;
        }
        main {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: blue;
          text-decoration: none;
        }
        .description {
          font-size: 1.5rem;
        }
        .navBarSUS {
          line-height: 2.3;
          font-size: 1.5rem;
          padding: 140px;
        }
        .navBarESF {
          line-height: 2.3;
          font-size: 1.5rem;
          padding: 140px;
        }
        .navBarAcoes {
          line-height: 2.3;
          font-size: 1.5rem;
          padding: 10px;
        }

        code {
          background: black;
          color: #50c878;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, BitStream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: red;
          border: 2px solid steelblue;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: white;
          border-color: black;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
          color: steelblue;
        }

        .logo {
          height: 1.8em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </>
  )
}
