const Contact = () => {
  return (
    <section id="page-4" className="section__full section__contact">
      <div className="column">
        <h2 className="title">
          <span>К</span>
          <span>о</span>
          <span>н</span>
          <span>т</span>
          <span>а</span>
          <span>к</span>
          <span>т</span>
          <span>ы</span>
        </h2>

        <p className="tags">Если у вас есть предложение, напишите мне.</p>

        <form className="form tags" action="">
          <fieldset className="half">
            <input type="text" placeholder="Имя" />
          </fieldset>
          <fieldset className="half">
            <input type="email" placeholder="Email" />
          </fieldset>
          <fieldset>
            <input type="text" placeholder="Тема" />
          </fieldset>
          <fieldset>
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Сообщение"
            ></textarea>
          </fieldset>
          <fieldset className="contact__button">
            <input className="button_fill" type="submit" />
          </fieldset>
        </form>
      </div>
      <div className="column">
        <div className="social">
          <a className="social_icon" href="https://github.com/Bellusfennec">
            <i className="fab fa-github-square"></i>
          </a>
          <a className="social_icon" href="https://vk.com/bellusfennec">
            <i className="fab fa-vk"></i>
          </a>
          <a
            className="social_icon"
            href="https://www.instagram.com/bellusfennec/"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="social_icon"
            href="https://www.facebook.com/bellusfennec"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
