import { ArrowLeft } from '@phosphor-icons/react';
import { FeedbackType, feedbackTypes } from '../../../constants/feedbackTypes';
import { CloseButton } from '../../CloseButton'
import { ScreenshotButton } from '../ScreenshotButton';
import { FormEvent, useContext, useState } from 'react';
import { Loading } from '../../Loading';
import { FeedgetContext } from '../../../contexts/FeedgetContext';
import { base64ToImageUrl } from '../../../lib/uploadImageToImgbb';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested, onFeedbackSent }: FeedbackContentStepProps) {
  const { isEnabledName, isEnabledEmail, discordWebhookUrl } = useContext(FeedgetContext);
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)

  const feedbackTypeInfo = feedbackTypes[feedbackType]

  async function handleSubmitFeedback(event: FormEvent) {
    event?.preventDefault();
    setIsSendingFeedback(true);

    let imageUrl = '';

    if (screenshot) {
      try {
        const url = await base64ToImageUrl(screenshot); 
        imageUrl = url;
      } catch (err) {
        console.error('Erro ao fazer upload da screenshot:', err);
      }
    }

    const message = {
      embeds: [
        {
          title: 'Novo Feedback Recebido!',
          description: feedbackTypeInfo.placeholder,
          color: feedbackTypeInfo.discordColor || 8542182, // Cor opcional
          "author": {
            "name": feedbackTypeInfo.title,
            "icon_url": feedbackTypeInfo.image.externalUrl
          },
          fields: [
            { name: 'Nome', value: name || 'Anônimo', inline: true },
            { name: 'Email', value: email || 'Não fornecido', inline: true },
            { name: 'Comentário', value: comment || 'Sem comentário.' },
          ],
          image: {
            url: imageUrl || '', 
          },
          footer: {
            text: 'Feedback Widget',
          },
        },
      ],
    };

    try {
      await fetch(discordWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message),
      });
    } catch (error) {
      console.error('Erro ao enviar feedback:', error);
    }

    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button onClick={onFeedbackRestartRequested} type='button' className='top-5 left-5 absolute text-text-secondary hover:text-text-primary'>
          <ArrowLeft weight='bold' className='w-4 h-4' />
        </button>
        <span className='text-xl leading-6 flex items-center gap-2 '>
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className='w-6 h-6' />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className='my-4 w-[304px]'>
        {isEnabledName && <input
          className='w-full mb-2 text-sm placeholder-text-secondary text-text-primary border-[1px] border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none border-stroke'
          required
          type="text"
          placeholder='Digite seu nome'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />}
        {isEnabledEmail && <input
          className='w-full h-10 mb-2 text-sm placeholder-text-secondary text-text-primary border-[1px] border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none border-stroke'
          required
          type="email"
          placeholder='Digite seu email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />}
        <textarea
          onChange={event => setComment(event.target.value)}
          className='w-full min-h-[112px] text-sm placeholder-text-secondary text-text-primary border-[1px] border-stroke bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thin scrollbar-thumb-secondary-hover scrollbar-track-transparent '
          placeholder={feedbackTypeInfo.placeholder} />
        <footer className='flex gap-2 mt-2'>
          <ScreenshotButton onScreenshotTook={setScreenshot} screenshot={screenshot} />
          <button
            type='submit'
            disabled={!comment || isSendingFeedback}
            className='p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-primary focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500'>
            {isSendingFeedback ? <Loading /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  )
}