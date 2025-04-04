import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { Githubsecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur,
      quaerat hic laudantium earum dolor sunt nihil quidem vitae ut pariatur
      illum ab temporibus officiis, recusandae eligendi cum ex expedita
      architecto.
    </Paragrafo>
    <Githubsecao>
      <img src="https://github-readme-stats.vercel.app/api?username=sahmendes&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=sahmendes&layout=compact&langs_count=7&theme=dracula" />
    </Githubsecao>
  </section>
)

export default Sobre
