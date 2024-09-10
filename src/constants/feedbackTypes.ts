import bugImageUrl from '../assets/bug.svg'
import ideaImageUrl from '../assets/idea.svg'
import thoughtImageUrl from '../assets/thought.svg'


export type FeedbackType = keyof typeof feedbackTypes

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    discordColor: 9594572,
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto',
      externalUrl: "https://media.discordapp.net/attachments/1283115965449502883/1283132262564626462/Bug.png?ex=66e1e18a&is=66e0900a&hm=c94e296f30a2902924d43c29e8e9c78341048b4f70a645c6c510b53d664309cc&=&format=webp&quality=lossless&width=50&height=50"
    },
    placeholder:
      "Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo...",
  },
  IDEA: {
    title: 'Ideia',
    discordColor: 16767363,
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lampada',
      externalUrl: 'https://media.discordapp.net/attachments/1283115965449502883/1283132262983925790/Idea.png?ex=66e1e18a&is=66e0900a&hm=aa219ac60f9348300835b368d8bf319b24301662a7dba1c9dac1fab529073ba8&=&format=webp&quality=lossless&width=50&height=50'
    },
    placeholder:
      "Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!",
  },
  OTHER: {
    title: 'Outro',
    discordColor: 8767736,
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de uma nuvem de pensamento',
      externalUrl: 'https://media.discordapp.net/attachments/1283115965449502883/1283132263298760765/Thought.png?ex=66e1e18b&is=66e0900b&hm=25e634d4e413f918bee0fba2e9e3df74830129b1c416db24fe1fe9e55b713e6f&=&format=webp&quality=lossless&width=50&height=50'
    },
    placeholder: "Queremos te ouvir. O que você gostaria de nos dizer?",
  },
}
