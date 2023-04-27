import { useRouter } from 'next/router'

const Game = () => {
  const router = useRouter()
  const { gid } = router.query

  return <p>Jeu numéro : {gid}</p>
}

export default Game