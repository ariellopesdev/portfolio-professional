//CSS
import "./SectionLayout.css";

export default function SectionLayout({ blocks = {} }) {
  return (
    <div className="section-layout">

      {/* TÍTULOS */}
      {blocks.title && <TitleBlock {...blocks.title} />}

      {/* PARÁGRAFOS */}
      {blocks.paragraphs && <ParagraphBlock items={blocks.paragraphs} />}

      {/* LABELS */}
      {blocks.labels && <LabelBlock items={blocks.labels} />}

      {/* ICON BLOCK */}
      {blocks.iconList && <IconBlock items={blocks.iconList} />}

      {/* GALERIA DE IMAGENS */}
      {blocks.imageGallery && <ImageBlock {...blocks.imageGallery} />}

      {/* TECH BLOCK */}
      {blocks.techBlock && <TechBlock {...blocks.techBlock} />}

      {/* BUTTON BLOCK */}
      {blocks.buttonBlock && <ButtonBlock {...blocks.buttonBlock} />}

      {/* LISTA UL */}
      {blocks.list && <ListBlock items={blocks.list} />}

      {/* SMALL */}
      {blocks.small && <small className="section-small">{blocks.small}</small>}
    </div>
  );
}

/* ---------------------------- BLOCO DE TÍTULOS ---------------------------- */

const TitleBlock = ({ h1, h2, h3, h4 }) => (
  <div className="title-block">
    {h1 && <h1>{h1}</h1>}
    {h2 && <h2>{h2}</h2>}
    {h3 && <h3>{h3}</h3>}
    {h4 && <h4>{h4}</h4>}
  </div>
);

/* ---------------------------- PARÁGRAFOS ---------------------------- */

const ParagraphBlock = ({ items }) => (
  <div className="paragraph-block">
    {items.map((p, index) => (
      <p key={index}>{p}</p>
    ))}
  </div>
);

/* ---------------------------- LABELS ---------------------------- */

const LabelBlock = ({ items }) => (
  <div className="label-block">
    {items.map((label, i) => (
      <label key={i}>{label}</label>
    ))}
  </div>
);

/* ---------------------------- ÍCONES + TEXTO ---------------------------- */

const IconBlock = ({ items }) => (
  <div className="icon-block">
    {items.map((item, i) => (
      <div className="icon-item" key={i}>
        <span className="icon">{item.icon}</span>
        <p>{item.text}</p>
      </div>
    ))}
  </div>
);

/* ---------------------------- GALERIAS DE IMAGENS ---------------------------- */

const ImageBlock = ({ images, type }) => (
  <div className={`image-block image-${type}`}>
    {images.map((src, i) => (
      <img src={src} key={i} alt={`img-${i}`} />
    ))}
  </div>
);

/* ---------------------------- TECH BLOCK ---------------------------- */

const TechBlock = ({ title, items }) => (
  <div className="tech-block">
    <h3>{title}</h3>
    <div className="tech-items">
      {items.map((t, i) => (
        <p key={i}>{t}</p>
      ))}
    </div>
  </div>
);

/* ---------------------------- BUTTON BLOCK ---------------------------- */

const ButtonBlock = ({ type, buttons }) => (
  <div className={`button-block button-${type}`}>
    {buttons.map((btn, i) => (
      <button key={i} onClick={btn.action}>
        {btn.label}
      </button>
    ))}
  </div>
);

/* ---------------------------- LISTA UL ---------------------------- */

const ListBlock = ({ items }) => (
  <ul className="list-block">
    {items.map((li, i) => (
      <li key={i}>{li}</li>
    ))}
  </ul>
);
