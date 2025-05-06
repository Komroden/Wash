import { Header } from "../components/templates/Header/Header.tsx";
import { MainInfoBlock } from "../components/templates/MainInfoBlock/MainInfoBlock.tsx";
import {OurServiceBlock} from "../components/templates/OurServiceBlock/OurServiceBlock.tsx";
import {OrderProcessBlock} from "../components/templates/OrderProcessBlock/OrderProcessBlock.tsx";
import {FeedbackBlock} from "../components/templates/FeedbackBlock/FeedbackBlock.tsx";
import {Reviews} from "../components/templates/Reviews/Reviews.tsx";
import {advantagesCards, footerLinks, LinksData, reviews} from "../mocks/constanats.tsx";
import {Footer} from "../components/templates/Footer/Footer.tsx";



const Home = () => {

    return (
        <div>
            <Header links={LinksData} title="WashGuard" phone="+ 7 927 766 5000" />
            <MainInfoBlock title="Надежная поддержка" subtitle="для стиральных машин" />
            <OurServiceBlock title="Наши товары" />
            <OrderProcessBlock title="Как проходит подбор" cards={advantagesCards} />
            <FeedbackBlock title="Оставьте заявку и получите скидку 10% на первый ремонт" subtitle="Заполните форму ниже и мы свяжемся с вами в течение нескольких минут" />
            <Reviews title="Отзывы клиентов" reviews={reviews} />
            <Footer links={footerLinks} title="iService" inn="756578457856" ogrnip="45786496596" orgName="ИП Название" />
        </div>
    );
};

export default Home;


