import { MainGrid } from '../src/components/MainGrid'
import { Box } from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'

function ProfileSideBar(propriedades) {
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`}  style={{ borderRadius: '8px' }}/>
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'hrammos'
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'macobrunedev',
    'felipefialho',
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <Box>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.lengh})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`} >
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                </li> 
                )
              })}
            </ul>
          </Box>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
