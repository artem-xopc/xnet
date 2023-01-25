import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


let postsData = [
  {
    id: 1,
    tittle: "CD Projekt Red начнёт сотрудничать с волонтёрами-тестировщиками для своих будущих игр",
    message: "Польская игровая студия CD Projekt Red организует инициативу Red Playtesting. Она позволит обычным геймерам-энтузиастам тестировать будущие игры.",
  },
  {
    id: 2,
    tittle: "Российские мультипликаторы предупредили об окончании срока действия лицензий на зарубежное специальное ПО",
    message: "Российские мультипликаторы предупредили об окончании срока действия лицензий на зарубежное специальное ПО."
  },
  {
    id: 3, 
    tittle: "Logitech сообщила о падении квартальной выручки на 22 % — в ближайшее время ситуация не исправится",
    message: "Крупный производитель компьютерной периферии Logitech International на этой неделе отчитался о результатах третьего фискального квартала (закончился 31 декабря), сообщив о снижении выручки на 22 % в годовом сравнении до $1,27 млрд в соответствии с собственными ожиданиями. Проблемы с поставками компонентов в прошлом квартале возникали из-за локдаунов в Китае, а спрос на продукцию Logitech оставался низким после длительного периода роста."
  },
];

let mainText = [
  {id: 1, message: "Я, Junior JavaScript Frontend Developer."},
  {id: 2, message: "Обучался самостоятельно по статьям в Интернете и видео на YouTube."}
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={postsData} text={mainText} />
    </BrowserRouter>
  </React.StrictMode>
);

