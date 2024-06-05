import estilos from './SecaoContato.module.css'
import Image from 'next/image';
import Local from '../../../public/local.png';
import Telefone from '../../../public/telefone.png';
import Email from '../../../public/email.png';
import Facebook from '../../../public/fb.png';
import Instagram from '../../../public/ig.png';
import Twitter from '../../../public/tt.png';


export default function SecaoContato() {
    return (
      <section className={estilos.container} id='contato'>
        <div>
          <h3>Fale conosco</h3>
          <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
  
          <div className={estilos.contato_container}>
            <div className={estilos.contato_conteudo}>
                <h4>Nossos Contatos</h4>
                <div>
                    <Image className={estilos.img_contato} src={Local} title="Ícone local" alt="Pino de localização"/>
                    <span>Nova Iguaçu, RJ</span>
                </div>
                <div>
                    <Image className={estilos.img_contato} src={Telefone} title="Ícone telefone" alt="Ícone de um telefone"/>
                    <span>(21) 9999-9999</span>
                </div>
                <div>
                    <Image className={estilos.img_contato} src={Email} title="Ícone email" alt="Ícone de uma carta"/>
                    <span>contato@oticavida.com</span>
                </div>
            </div>
            <div className={estilos.contato_conteudo}>
                <h4>Nossas Redes Sociais</h4>
                <div>
                    <Image className={estilos.img_contato} src={Facebook} title="Ícone facebook" alt="logo do facebook"/>
                    <span>/OticaVida</span>
                </div>
                <div>
                    <Image className={estilos.img_contato} src={Instagram} title="Ícone instagram" alt="logo do instagram"/>
                    <span>@oticavidarj</span>
                </div>
                <div>
                    <Image className={estilos.img_contato} src={Twitter} title="Ícone twitter" alt="logo do twitter"/>
                    <span>@oticavidarj</span>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }