import { useContext } from "react";
import Slider from "react-slick";
import { GlobalContext } from "../../context/GlobalContext";
import { specialties } from "../../data";
import './index.scss'

const Work = () => {

    const {windowWidth} = useContext(GlobalContext)



    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1400,
        slidesToShow: windowWidth > 1200 ? 4
            : windowWidth > 992 ? 3
            : windowWidth > 768 ? 2
            : windowWidth > 576 ? 2
            : 1,
        slidesToScroll: windowWidth > 1200 ? 4
            : windowWidth > 992 ? 3
            : windowWidth > 768 ? 2
            : windowWidth > 576 ? 2
            : 1
        }

    
    
    return (
        <div className="site-section section-2 bg-light" id="specialties-section">
            <div className="container">
                <div className="row text-center justify-content-center">
                    <div className="col-lg-6 mb-5">
                        <span className="section-sub-title d-block">Nuestro Trabajo</span>
                        <h2 className="section-title">Especialidades</h2>
                        <p>Nuestro equipo está integrado por profesionales especializados en todas las áreas odontológicas,
                            brindando la comodidad de poder recibir una atención multidisciplinaria en el mismo lugar.</p>
                    </div>
                </div>

            </div>





            <div className="owl-carousel nonloop-block-13" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <Slider {...settings}>
                {
                    specialties.map((sp,index)=>{ return (

                        <div key={sp+index} className="work-thumb"  data-fancybox="gallery">
                        <div className="work-text">
                            <h3>{sp.name}</h3>
                            {/* <p className="category">{sp.category}</p> */}
                        </div>
                        <div className="work-description">
                            <h6 className=" section-sub-title">Tratamiento</h6>
                            <span className="category text-aligne-center">{sp.text}</span>
                            {
                                sp.treatments.length > 1 && (
                                    <>
                                        <div className='mt-4'>   
                                            {
                                                sp.treatments.map((tr,index)=><button key={tr+index} type="button" className="btn btn-outline-light btn-lg m-1">{tr}</button>)
                                            }
                                            

                                        </div>
                                    </>
                                )
                            }
                        </div>
                        <img src={`${process.env.PUBLIC_URL}/${sp.img}`}
                            alt={`Especialidad: ${sp.name} - LBN Odontología - centro odontológico CABA Buenos Aires Argentina`} className="img-fluid" />
                    </div>
    
                        
                    )})
                }
                
            </Slider>
            </div>
        </div>
    )
}

export default Work