'use client';
import { useChat } from 'ai/react';
import styles from './Chat.module.sass';

export const Chat = (props: { agent: string }) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id: '1',
        role: 'system',
        content: props.agent
      }
    ],
  });

  return (
    <main className={styles.Chat} >
      <h1 className={styles.Chat__title}>Pregunta algo relacionado a la tienda</h1>
      <form onSubmit={handleSubmit} className={styles.Chat__form}>
        <input
          className={styles.Chat__input}
          value={input}
          onChange={handleInputChange}
          placeholder="¿Qué te gustaría comprar?"
        />
        <button
          className={styles.Chat__button}
        >
          Enviar
        </button>
      </form>
      <section className={styles.Chat__messages}>
        {messages
          .filter(m => m.role !== 'system')
          .map(m => {
            return (
              <span key={m.id} className={styles.Chat__message}>
                <div className={styles.Chat__message__icon}>
                  {m.role === "assistant" ? "🤖" : "😊"}
                </div>
                <div>
                  {m.content}
                </div>
              </span>
            )
          }

          )}
      </section>
    </main>
  );
}