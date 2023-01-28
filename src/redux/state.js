import aboutReducer from "./about_reducer";
import newsReducer from "./news_reducer";

const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const ADD_COMMENT = "ADD-COMMENT";
const UPDATE_COMMENT = "UPDATE-COMMENT";

let store = {
  _state: {
    news: {
      newsIT: [
        {
          id: 1,
          tittle:
            "CD Project Red начнёт сотрудничать с волонтёрами-тестировщиками для своих будущих игр",
          message:
            "Польская игровая студия CD Projekt Red организует инициативу Red Playtesting. Она позволит обычным геймерам-энтузиастам тестировать будущие игры.",
        },
      ],
      newsGames: [
        {
          id: 1,
          tittle: `Паника среди китайских геймеров`,
          message: `В Китае началась паника, так как там отключили все серверы Blizzard. 
          Значит китайским геймерам не доступны такие игры, как Overwatch, Starcraft, Hearthstone и WoW. 
          Произошло это из-за разрыва договорённости между американской компанией и владельцами китайских сервером. 
          Полную статью можно прочитать здесь -> https://esportsinsider.com/2023/01/blizzard-games-offline-china-esports-implications.`,
        },
      ],
      newsTech: [
        {
          id: 1,
          tittle:
            "Logitech сообщила о падении квартальной выручки на 22 % — в ближайшее время ситуация не исправится",
          message:
            "Крупный производитель компьютерной периферии Logitech International на этой неделе отчитался о результатах третьего фискального квартала (закончился 31 декабря), сообщив о снижении выручки на 22 % в годовом сравнении до $1,27 млрд в соответствии с собственными ожиданиями. Проблемы с поставками компонентов в прошлом квартале возникали из-за локдаунов в Китае, а спрос на продукцию Logitech оставался низким после длительного периода роста.",
        },
      ],
      newsOther: [
        {
          id: 1,
          tittle:
            "Российские мультипликаторы предупредили об окончании срока действия лицензий на зарубежное специальное ПО",
          message:
            "Российские мультипликаторы предупредили об окончании срока действия лицензий на зарубежное специальное ПО.",
        },
      ],
    },
    about: {
      info: [
        {
          id: 1,
          text: `Я, Junior JavaScript Frontend Developer, обладающий всеми необходимыми навыками для успешного ведения деятельности в IT сфере. 
            Пишу код с 2020-го года. Моя цель как разработчика – это постоянное развитие профессиональных качеств, приобретение новых навыков, 
            знаний и умений в web разработке. У меня присутствуют навыки разработки на нативном JavaScript, а также есть опыт в вёрстке 
            Web страниц. Ко всему прочему имею опыт разработки серверной части проектов. Мои навыки помогут компании реализовать необходимые 
            проекты в области web разработки. Я легко обучаюсь новым навыкам, люблю и умею работать в команде, а также умею слушать 
            конструктивную критику, принимать и исполнять указанные ошибки.`,
        },
        {
          id: 2,
          text: `Обучался самостоятельно по статьям в Интернете и видео на YouTube. Также решал задачи на LeetCode и CodeWars. 
            Для наиболее полного изучения JavaScript мной была изучена книга Дэвида Флэнагана "JavaScript: Полное руководство". 
            А для понимания реализации алгоритмов я изучил книгу "Грокаем алгоритмы" за авторством Адитьи Бхаргава. 
            Результатами моего изучения основных алгоритмов стало небольшое Web приложение`,
        },
      ],
      tech_info: [
        {
          id: 1,
          text: `- JavaScript программист\n
          - Возраст: 22 года 
          - Пол: мужской
          - Страна проживания: Россия`,
          tech: `- Язык программирования: JavaScript;
          - Технологии и фреймворки: HTML5, CSS3, ReactJS, NodeJS, система контроля версий Git, SASS (SCSS), Bootstrap5;
          - Базы данных: MongoDB, PostgreSQL;
          - IDE: VSCode.`,
        },
      ],
      posts: [
        {
          id: 3,
          tittle: `Первый пост недонесталкера`,
          post: `Здравствуй, user_name, данный пост является первым, но не единственным постом на данном ресурсе. Тестирую велосипедный state.`,
          likes: 0,
        },
        {
          id: 2,
          tittle: `Второй пост недонесталкера`,
          post: `Снова здравствуй, user_name, продолжаю тестировать велосипедный state.`,
          likes: 0,
        },
        {
          id: 1,
          tittle: `Третий пост недонесталкера`,
          post: `Здравствуй, user_name, как известно, Бог любит троицу, поэтому данный пост является третим захардкоженным в велосипедном state постом.`,
          likes: 0,
        },
      ],
      comments: [
        { id: 1, body: `Круто!` },
        { id: 2, body: `Замечательно!` },
        { id: 3, body: `Я не user_name, где кнопка регистрации?` },
      ],
      newCommentBody: "",
      newTittleText: "Are you netstalker?",
      newPostText: "[netstalker]",
    },
  },
  _callSubscriber() {
    console.log("The Mark II is complited");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.about = aboutReducer(this._state.about, action);
    this._state.news = newsReducer(this._state.news, action);
    
    this._callSubscriber(this._state);

    // switch (action.type) {
    //   case (action.type === ADD_POST):
    //     this._addPost();
    //     break;
    //   case (action.type === UPDATE_POST):
    //     this._updatePostText();
    //     break;
    // }
  },
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updatePostCreator = (text) => ({
  type: UPDATE_POST,
  newText: text,
});
export const addCommentCreator = () => ({ type: ADD_COMMENT });
export const updateCommentCreator = (body) => ({
  type: UPDATE_COMMENT,
  body: body,
});

window.store = store;

export default store;