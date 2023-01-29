const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const ADD_COMMENT = "ADD-COMMENT";
const UPDATE_COMMENT = "UPDATE-COMMENT";

let initialState = {
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
      id: 4,
      tittle: `Первый пост недонесталкера`,
      post: `Здравствуй, user_name, данный пост является первым, но не единственным постом на данном ресурсе. Тестирую велосипедный state.`,
    },
    {
      id: 3,
      tittle: `Второй пост недонесталкера`,
      post: `Снова здравствуй, user_name, продолжаю тестировать велосипедный state.`,
    },
    {
      id: 2,
      tittle: `Третий пост недонесталкера`,
      post: `Здравствуй, user_name, как известно, Бог любит троицу, поэтому данный пост является третим захардкоженным в велосипедном state постом.`,
    },
    {
      id: 1,
      post: `Что ж, может быть, отказаться от заголовков - это хорошая идея, посмотрим как будет дальше (28.01.2023).`,
      comments: [
        { id: 1, body: `Круто!` },
        { id: 2, body: `Замечательно!` },
        { id: 3, body: `Я не user_name, где кнопка регистрации?` },
      ],
    },
  ],
  newCommentBody: "",
  newTittleText: "Are you netstalker?",
  newPostText: "[netstalker]",
};

const aboutReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        tittle: state.newTittleText,
        post: state.newPostText,
        likes: 0,
      };

      state.posts.push(newPost);
      state.newTittleText = "";
      state.newPostText = "";
      return state;
    case UPDATE_POST:
      state.newPostText = action.newText;
      // state.newTittleText = newText;
      return state;
    case ADD_COMMENT:
      let newComment = {
        id: 4,
        body: state.body,
      };

      state.comments.push(newComment);
      // let messageBody = state.newCommentBody;
      state.newCommentBody = "";
      return state;
    case UPDATE_COMMENT:
      state.newCommentBody = action.body;
      return state;
    default:
      return state;
  }
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

export default aboutReducer;
