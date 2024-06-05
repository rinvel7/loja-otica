import estilos from './SecaoSobre.module.css';
import Image from 'next/image';
import Loja from '../../../public/loja.png';
import Atendimento from '../../../public/atendimento.png'

export default function SecaoSobre() {
    return (
      <section id='sobre' className={estilos.container}>
        <div >
          <h3>QUEM SOMOS NÓS?</h3>
          <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
  
          <div className={estilos.box_cards}>
            <Image className={estilos.img_card} src={Loja} />
  
            <div className={estilos.card}>
              <h4>Nossas Filiais</h4>
              <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
            </div>
  
            <div className={estilos.card}>
              <h4>Atendimento flexível</h4>
              <p>Nossa equipe possui é treinada para te atender</p>
            </div>
  
            <Image className={estilos.img_card} src={Atendimento} />
          </div>
        </div>
      </section>
    )
  }