import estilos from './Topo.module.css';
import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Link from 'next/link';



export default function Topo() {
  return (
    <header className={estilos.container}>
        <div className={estilos.container_topo}>
          <Image className={estilos.img_logo} src={Logo} alt='imagem de um óculos à direita e o nome da ótica à esquerda' />

          <nav>
            <Link className={estilos.link_nav} href='#produtos'>PRODUTOS</Link>
            <Link className={estilos.link_nav} href='#sobre'>SOBRE</Link>
            <Link className={estilos.link_nav} href='#contato'>CONTATO</Link>
          </nav>
        </div>
      </header>
  )
}