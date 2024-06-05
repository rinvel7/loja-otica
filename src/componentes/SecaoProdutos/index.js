import estilos from './SecaoProdutos.module.css';
import Image from 'next/image';
import Oculo_1 from '../../../public/oculos01.png';
import Oculo_2 from '../../../public/oculos02.png';
import Oculo_3 from '../../../public/oculos03.png';
import Oculo_4 from '../../../public/oculos04.png'


export default function SecaoProdutos() {
    return (
      <section id='produtos' className={estilos.container}>
        <div>
          <h2>Nossos produtos</h2>
          <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
          <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>

          <div className={estilos.container_produtos}>            
           
            <div className={estilos.box_produto}>
              <h4>Óculos de grau</h4>
              <Image className={estilos.img_produto} src={Oculo_1} title='Óculos de grau' alt='4 óculos de grau de cores diferentes'/>
              <p>R$ 500,00</p>
            </div>
            
            <div className={estilos.box_produto}>
              <h4>Óculos transition</h4>
              <Image className={estilos.img_produto} src={Oculo_2} title='Óculos de grau' alt='4 óculos de grau de cores diferentes'/>
              <p>R$ 750,00</p>
            </div>
            
            <div className={estilos.box_produto}>
              <h4>Óculos de sol</h4>
              <Image className={estilos.img_produto} src={Oculo_3} title='Óculos de grau' alt='4 óculos de grau de cores diferentes'/>
              <p>R$ 700,00</p>
            </div>
            
            <div className={estilos.box_produto}>
              <h4>Óculos infantil</h4>
              <Image className={estilos.img_produto} src={Oculo_4} title='Óculos de grau' alt='4 óculos de grau de cores diferentes'/>
              <p>R$ 500,00</p>
            </div>
          </div>
  
          <h3>Todos os nossos produtos incluem:</h3>
  
          <ul>
            <li>Garantia de 1 ano</li>
            <li>Manutenção preventiva</li>
            <li>Descontos especiais na compra da segunda unidade</li>
            <li>Flexibilidade de pagamento</li>
          </ul>
        </div>
      </section>
    )
  }