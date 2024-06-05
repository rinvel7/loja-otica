import estilos from './SecaoCapa.module.css'

export default function SecaoCapa() {
    return (
      <section className={estilos.container}>
        <div className={estilos.container_capa}>
          <p>Preços baixos em</p>
          <h1>Óculos de grau e de sol</h1>
          <p>Você só encontra aqui</p>
        </div>
      </section>
    )
  }