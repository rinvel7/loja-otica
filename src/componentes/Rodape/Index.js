import estilos from './Rodape.module.css'

export default function Rodape() {
    return (
      <footer className={estilos.container}>
        <div>
          <p>© 2022 Óticas Vida. - Todos os direitos reservados.</p>
        </div>
      </footer>
    )
  }