import Slider from "react-slick";
import './index.scss'
import { carouselData } from "../../data";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

const Home = () => {

    const settings = {
        fade: true,
        cssEase: 'linear',
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1200,
    }

    const {windowWidth} = useContext(GlobalContext)

    return (
        <div className="intro-section" id="home-section">
            <div className="container">
                    <Slider {...settings}>
                    {
                        carouselData.map((el,index)=>{return(
                            
                            <div key={el+index} className="row align-items-center d-flex m-0">
                                <div className="col-lg-4 mr-auto " data-aos="fade-up" style={{zIndex:'10', minHeight: '385px'}}>
                                    <h1>{el.title}</h1>
                                    <p className="mb-5">{el.description}</p>
                                    <p>{el.link && <a href="/" className="btn btn-outline-light py-3 px-5">{el.link}</a>}</p>
        
                                </div>
                                <div className="col-lg-2 ml-auto" data-aos={`${windowWidth >= 768 && "fade-up"}`}>
                                    <figure className="img-absolute">
                                        <img src={`${process.env.PUBLIC_URL}/img/home/${el.image}`}
                                            alt="LBN Odontología - centro odontológico CABA Buenos Aires Argentina" className="img-fluid" />
                                    </figure>
                                </div>
                            </div>
                        )})        
                    }
                    </Slider>
            </div>
        </div>
    )
}

export default Home