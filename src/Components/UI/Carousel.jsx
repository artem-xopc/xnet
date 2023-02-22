import { Carousel } from "react-bootstrap";
import binarymap from '../../icons/binarymap.jpg';
import lp from '../../icons/LP.jpg';
import binaryNum from '../../icons/010101.jpg';

const CarouselImg = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={binarymap} alt='Двоичная карта' />
                    <Carousel.Caption>
                        <h3>Двоичная карта</h3>
                        <p>Этапы развития программирования</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={lp} alt='Языки программирования' />
                    <Carousel.Caption>
                        <h3>Языки программирования</h3>
                        <p>Самые распространённые языки программирования</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={binaryNum} alt='Нули и единицы' />
                    <Carousel.Caption>
                        <h3>О Мотивации и Дисциплине</h3>
                        <p>Как я пришёл в программирование</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselImg;