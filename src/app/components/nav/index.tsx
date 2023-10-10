const Nav = () => {
  return (
    <nav>
      <div className="menu-container">
        <div className="bars">
          <span></span>
          <span></span>
          <span></span>
          <div className="other-bar"></div>
        </div>
      </div>
      <a href="#page-1">Работы</a>
      <a href="#page-2">О себе и Навыки</a>
      <a href="#page-3">Обучение</a>
      <a href="#page-4">Контакты</a>
    </nav>
  );
};

export default Nav;
