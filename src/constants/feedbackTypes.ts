import bugImageUrl from '../assets/bug.svg'
import ideaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'

export type FeedbackType = keyof typeof feedbackTypes

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    },
    placeholder:
      "Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...",
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada'
    },
    placeholder:
      "Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!",
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma nuvem de pensamento'
    },
    placeholder: "Queremos te ouvir. O que você gostaria de nos dizer?",
  },
}
