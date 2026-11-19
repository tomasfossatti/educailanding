import { chatMock } from "@/content/inicio";

/** Ilustración del producto en el inicio, hecha con código y con datos de ejemplo. */
export function ProductView({ className = "" }: { className?: string }) {
  return (
    <figure className={`product-view ${className}`.trim()} aria-label={chatMock.label}>
      <div className="product-view__pane">
        <p className="label">{chatMock.studentLabel}</p>
        <div className="chat">
          <p className="chat__message chat__message--student">
            <span className="visually-hidden">{chatMock.studentSpeaker}: </span>
            {chatMock.question}
          </p>
          <p className="chat__message chat__message--tutor">
            <span className="visually-hidden">{chatMock.tutorSpeaker}: </span>
            {chatMock.answer}
          </p>
        </div>
      </div>
      <div className="product-view__pane">
        <p className="label">{chatMock.teacherLabel}</p>
        <ul className="topics">
          {chatMock.topics.map((topic) => (
            <li key={topic.label}>
              <span className="topics__label">{topic.label}</span>
              <div className="topics__track" aria-hidden="true">
                <div className="topics__fill" style={{ width: `${topic.value}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="product-view__note meta">{chatMock.note}</figcaption>
    </figure>
  );
}
