import './index.scss'

import {technology} from '../../data'

const Services = () => {

    return (
        <div className="site-section" id="services-section">
            <section className="service-tab-section section">
                <div className="outer-box clearfix">
                    <div className="container">
                        <div className="row" style={{justifyContent: "center"}}>
                            <div className="col-lg-6 mb-5 text-center justify-content-center">
                                {/* <span className="section-sub-title d-block">Canales de atención</span> */}
                                <h2 className="section-title" style={{maxWidth:"none"}}>Tecnología</h2>
                            </div>
                            <div className="col-md-12">
                                <div className="tabs mb-5">
                                    <ul className="nav nav-tabs justify-content-center" id="aboutTab" role="tablist" data-aos="fade-up" data-aos-duration="1000">
                                        {
                                            technology.map((tech,index)=>{return(
                                                <li key={index+tech} className="nav-item" role="presentation">
                                                    <a className={`nav-link ${index === 0 && 'active'}`} id={`${tech.code}-tab`} data-toggle="tab" href={`#${tech.code}`} role="tab" aria-controls={`${tech.code}`} aria-selected="true">{tech.name}</a>
                                                </li>
                                            )})
                                        }
                                    </ul>
                                </div>
                                <div className="tab-content" id="aboutTab" data-aos="fade-up" data-aos-duration="1500">
                                    {
                                        technology.map((tech,index)=>{return(
                                            <div key={tech+index} className={`service-box tab-pane fade show ${index === 0 && 'active'}`} id={tech.code}>
                                                <div className="row">
                                                <div className="col-lg-6">
                                                    <img loading="lazy" className="img-fluid" src={`${process.env.PUBLIC_URL}/img/tech/${tech.img}`} alt={`${tech.name} - Tecnologia - Servicio odontologico - LBN odontología`}/>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="contents">
                                                        <div className="section-title">
                                                            <h3>{tech.name}</h3>
                                                        </div>
                                                        <div className="text">
                                                            {
                                                                tech.parraphs.map((parraph, index)=><p key={parraph+index}>{parraph}</p>)
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        )})
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services