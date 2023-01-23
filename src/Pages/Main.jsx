import { Button } from 'react-bootstrap';
import CarouselImg  from '../Components/Carousel';

const Main = () => {
  return (
    <div>
      <CarouselImg />
      <h1>Главная</h1>
      <Button variant='primary'>Кнопка</Button>
    </div>
  );
};

export default Main;