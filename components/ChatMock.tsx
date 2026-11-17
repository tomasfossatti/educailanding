import { chatMock } from "@/content/inicio";

/** Ilustración del hero de Inicio, hecha con código y con datos de ejemplo. */
export function ChatMock() {
  return (
    <div className="chat-card basis-420" role="group" aria-label="Ilustración de Educai con datos de ejemplo">
      <p className="label">{chatMock.studentLabel}</p>
      <p className="bubble bubble--student">{chatMock.question}</p>
      <p className="bubble bubble--tutor">{chatMock.answer}</p>
      <hr className="divider" />
      <p className="label">{chatMock.teacherLabel}</p>
      <ul className="stack gap-14">
        {chatMock.topics.map((topic) => (
          <li key={topic.label} className="stack gap-6">
            <span className="topic__label">{topic.label}</span>
            <div className="track" aria-hidden="true">
              <div className="track__fill" style={{ width: `${topic.value}%` }} />
            </div>
          </li>
        ))}
      </ul>
      <p className="chat-note">{chatMock.note}</p>
    </div>
  );
}
