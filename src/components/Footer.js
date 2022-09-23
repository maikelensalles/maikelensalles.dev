import '../styles/footer.scss';

const imagem = ['https://maikelensalles.site/images/maikelensalles..png']

export function Footer() {
    return (
      <div id="footer">
        <img src={imagem} alt='' />
        <h3>Aguardem as cenas dos próximos capítulos dessa jornada 😉</h3>
        <p>Made with ❤ by Maikelen Salles</p>
      </div>
    )
}