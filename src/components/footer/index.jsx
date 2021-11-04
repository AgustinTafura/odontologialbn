import { useEffect } from 'react'
import './index.scss'

const Footer = () => {


    useEffect(() => {
        // Color-today
        var today = new Date(Date.now()).getDay()
        var idToday = "#day-" + today
        document.querySelector(idToday).style.color = "#83C7D3";
        // document.querySelector(idToday).style.fontWeight = '500';

    }, [])

    return (        
        <footer className="site-section section-2 pb-0" id="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mb-5">
                        <span className="section-sub-title d-block">Canales de atención</span>
                        <h2 className="section-title">Contacto</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="">
                        <div className="process p-3">
                            <span className="number"><i className="far fa-clock" /></span>
                            <div>
                                <span className="flaticon-glasses display-4 text-primary mb-4 d-inline-block"></span>
                                <h3>Horario</h3>
                                <table id="timetable" className="table col-sm-8 col-md-6 mb-0">
                                    <thead>
                                    </thead>
                                    <tbody>
                                        <tr id="day-1">
                                            <td className="day">Lunes</td>
                                            <td className="time">10 - 20 Hs</td>
                                        </tr>
                                        <tr id="day-2">
                                            <td className="day">Martes</td>
                                            <td className="time">10 - 20 Hs</td>
                                        </tr>
                                        <tr id="day-3">
                                            <td className="day">Miercoles</td>
                                            <td className="time">10 - 20 Hs</td>
                                        </tr>
                                        <tr id="day-4">
                                            <td className="day">Jueves</td>
                                            <td className="time">10 - 20 Hs</td>
                                        </tr>
                                        <tr id="day-5">
                                            <td className="day">Viernes</td>
                                            <td className="time">10 - 20 Hs</td>
                                        </tr>
                                        <tr id="day-6">
                                            <td className="day">Sabado</td>
                                            <td className="time">10 - 13 Hs</td>
                                        </tr>
                                        <tr id="day-0">
                                            <td className="day">Domingo</td>
                                            <td className="time">CERRADO</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                        <div className="process p-3">
                            <span className="number"><i className="fas fa-mobile-alt" /></span>
                            <div>
                                <span className="flaticon-vector display-4 text-primary mb-4 d-inline-block"></span>
                                <h3>Teléfono</h3>
                                <div>
                                    Solicitá tu Turno <br />
                                    Tel: <span><a href="tel:+541148547676">011 4854-7676</a></span><br />
                                    WhatsApp: <span><a
                                            href="https://api.whatsapp.com/send?phone=5491167485220&text=&source=&data=&app_absent=">011
                                            6748-5220</a></span>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                        <div className="process p-3">
                            <span className="number"><i className="fas fa-map-marker-alt" /></span>
                            <div>
                                <span className="flaticon-monitor display-4 text-primary mb-4 d-inline-block"></span>
                                <h3>Dirección</h3>
                                <address>
                                    Av. Corrientes 4924 - Piso 6<br />
                                    CP C1414, Capital Federal<br />
                                    
                                    <a href="https://goo.gl/maps/tCw7LczfgJvjPbFC6">Cómo llegar</a>
                                </address>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                        <div className="process p-3">
                            <span className="number"><i className="far fa-envelope" /></span>
                            <div>
                                <span className="flaticon-monitor display-4 text-primary mb-4 d-inline-block"></span>
                                <h3>Mail</h3>
                                <p>lbnconsultorio@gmail.com</p>
                            </div>

                        </div>
                    </div>
                    <div id="map-google" className="mt-3 col-12 col-lg-9">
                        <iframe width="100%" height="220" frameBorder="0" style={{border:"0"}}
                            title='LBN Odontologia direccion mapa consultorio donotologico - Villa Crespo, CABA, capital federal, Buenos Aires, Argentina'
                            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJozmiOnLKvJURe-7Uv1aODw0&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
                            allowFullScreen
                            ></iframe>
                    </div>
                </div>
            </div>
            <div id="footer-copyright" className="container mt-2">
                <p>LBN Odontologia ® | Consultorio Odontológico Especializado de Alta Tecnología. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer