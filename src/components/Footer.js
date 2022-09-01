import '../styles/footer.scss';

const imagem = ['https://maikelensalles.site/images/maikelensalles..png']

export function Footer() {
    return (
      <div id="footer">
        <img src={imagem} alt='' />
        <p>Made with ♡ by Maikelen Salles</p>
      </div>
    )
}