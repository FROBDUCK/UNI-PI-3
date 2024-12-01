import { HeaderSobre } from "./components/HeaderSobre";
import image1 from './assets/image1.png';
import image2 from './assets/logomarca.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import image_end from './assets/image-all.png'
import './Sobre.css'
import './global.css';
import Footer from './components/Footer'

function Sobre() {
  return (
    <div className="sobre">
      <HeaderSobre />
      <section className="banner">
        <div className="banner_text">
          <h1>A conexão entre <strong className="change-purple">talento e necessidade</strong> transforma o <strong className="change-orange">futuro</strong> do trabalho.</h1>
          <h5>Inovamos nas conexões entre profissionais e clientes, alinhando serviços à vida moderna, com praticidade e confiança.</h5>
        </div>
        <div className="banner_img">
          <img src={image1} alt='imagem inicial'></img>
        </div>
      </section>
      <section className="container_sobrenos">
        <div className="title">
          <h1>Sobre nós</h1>
          <div className="paragraph">
            <p>Somos uma plataforma inovadora que conecta profissionais especializados com clientes em busca de serviços de qualidade, confiança e agilidade. Nosso objetivo é simplificar a interação entre quem oferece e quem precisa de soluções, criando uma rede de oportunidades em diversas áreas. Facilitamos o encontro de profissionais qualificados, promovendo segurança, praticidade e eficiência em cada contratação.</p>
            <p>Com um processo fácil e direto, você pode explorar diversas categorias de serviços, conferir perfis, avaliações e contatar o profissional ideal. Acreditamos que, ao facilitar essas conexões, estamos transformando o trabalho, gerando mais tempo e oportunidades para todos.</p>
          </div>
        </div>
        <div className="img">
          <img src={image2} alt="logomarca" />
        </div>
      </section>

      <section className="container_historia">
        <div className="title">
          <h1>Nossa História</h1>
          <div className="paragraph">
            <p>Nosso propósito é criar um espaço onde a conexão entre profissionais e clientes seja simples, eficiente e segura. Acreditamos que, ao facilitar o acesso a serviços qualificados, estamos impactando vidas, economizando tempo e contribuindo para o crescimento de quem oferece e quem busca soluções. Unidos pela confiança e pela vontade de transformar a maneira como trabalhamos e vivemos, criamos oportunidades para que todos possam prosperar.</p>
            <p>Nosso compromisso é ir além da simples conexão. Queremos construir relações baseadas na confiança e no respeito, onde cada serviço entregue seja uma oportunidade de crescimento mútuo. Acreditamos que, ao transformar a experiência de contratação e prestação de serviços, estamos ajudando a criar um futuro mais colaborativo e equilibrado, onde as pessoas possam se desenvolver profissionalmente e alcançar uma melhor qualidade de vida.</p>
          </div>
        </div>
        <div className="img">
          <img src={image3} alt="imagem de uma moça" />
        </div>
      </section>

      <section className="container_fazemos">
        <div className="img">
          <img src={image4} alt="imagem de um trabalhador" />
        </div>
        <div className="title">
          <h1>O que fazemos</h1>
          <div className="paragraph">
            <p>Na plataforma Serv, conectamos prestadores de serviços a clientes de forma simples e eficiente, facilitando a busca por serviços de qualidade em diversas áreas, como design, fotografia e manutenção. Oferecemos um espaço onde os prestadores podem criar perfis completos, destacando suas habilidades e portfólios, enquanto os clientes navegam por essas opções para encontrar o profissional ideal.</p>
            <p>Nosso sistema de avaliações promove transparência e confiança, permitindo que ambos os lados compartilhem experiências. Com uma interface intuitiva e uma comunidade vibrante, a Serv é o lugar certo para quem busca destacar seu talento ou encontrar o serviço ideal. Estamos aqui para transformar projetos e sonhos em realidade, facilitando conexões valiosas.</p>
          </div>
        </div>

      </section>
      <section className="container_icons">
        <div className="text_icon">
          <img src={icon1} alt="icone de pessoas"></img>
          <h5>Time profissional</h5>
        </div>
        <div className="text_icon">
          <img src={icon2} alt="icone de objetivo"></img>
          <h5>Foco nos Objetivos</h5>
        </div>
        <div className="text_icon">
          <img src={icon3} alt="icone de sucesso"></img>
          <h5>Sucesso Garantido</h5>
        </div>
      </section>
      <section className="image_end">
        <img src={image_end} alt="imagem final"></img>
      </section>
      <Footer/>

    </div >
  );
}

export default Sobre;
