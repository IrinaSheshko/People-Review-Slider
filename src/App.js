import { useState, useEffect } from "react"; // Добавили useEffect
import { data } from "./data";
import PersonCard from "./PersonCard";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const person = data[index];

  // 1. Универсальная функция смены слайда
  const changePerson = (direction) => {
    setIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % data.length;
      }
      return (prev - 1 + data.length) % data.length;
    });
  };

  // 2. Функция "Surprise Me" (Рандом)
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    // Если рандом выдал тот же индекс, что и сейчас — просто берем следующий
    if (randomNumber === index) {
      randomNumber = (index + 1) % data.length;
    }
    setIndex(randomNumber);
  };

  // Автоплей
  useEffect(() => {
    const timer = setInterval(() => {
      changePerson("next");
    }, 5000); // Слайд меняется каждые 5 секунд
    
    return () => clearInterval(timer); 
  }, [index]); // Перезапускаем таймер при смене индекса

  // Проверка на случай пустых данных
  if (!data || data.length === 0) {
    return <div className="slider-container"><h1>No reviews found...</h1></div>;
  }

  return (
    <div className="slider-container">
      <h1 className="title">People Review Slider</h1>
      <div className="underline"></div> 
      
      <div className="slider">
        <PersonCard person={person} />
      </div>

      <div className="btn-container">
        <button className="nav-btn" onClick={() => changePerson("prev")}>
          Previous
        </button>
        <button className="nav-btn" onClick={() => changePerson("next")}>
          Next
        </button>
      </div>

      {/* Новая кнопка для портфолио */}
      <button className="random-btn" onClick={randomPerson}>
        Surprise Me
      </button>
    </div>
  );
}

export default App;
