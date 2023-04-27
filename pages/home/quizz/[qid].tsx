import { useRouter } from 'next/router'

const QuizzUnit = () => {
  const router = useRouter()
  const { qid } = router.query

  return <p>Quizz: {qid}</p>
}

export default QuizzUnit