import { useContext } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { GlobalContext } from '../../context/GlobalContext';
import './index.scss'

const Us = () => {

    const {windowWidth} = useContext(GlobalContext)


    return (
        <div className="site-section section-1" id="team-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 mr-auto mb-5">
                        <div className="mb-5">
                            <span className="section-sub-title d-block">Equipo LBN</span>
                            <h2 className="section-title">Profesionalismo, Innovación, Compromiso.</h2>
                            <p>Todos los días nos ocupamos de brindarte un tratamiento de calidad,
                                incorporando tecnología de punta y trabajando con el profesionalismo que mereces.</p>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="image-absolute-box">
                            <Parallax className="" y={[30, -15]} disabled={windowWidth < 992 && true}>
                                <img src={`${process.env.PUBLIC_URL}/img/home/team.jpg`}
                                    alt="LBN Odontología - centro odontológico CABA Buenos Aires Argentina"
                                    className="img-fluid" />
                            </Parallax>
                            <div className="box" data-aos="fade-down">
                                <h3>Somos Familia</h3>
                                <p>Somos una familia de profesionales dedicados al cuidado y la prevención de tu salud
                                    bucal.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Us