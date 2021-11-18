import 'jquery-sticky';
import './index.scss'
import MobileMenu from '../mobileMenu'
import $ from 'jquery'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext';

const Navbar = () => {

    const {windowScrollY} = useContext(GlobalContext)

    const toggleMobileMenu = (e) => {
        var element = e.target;
        var body = document.querySelector('body')
        e.preventDefault();
        if (body.classList.contains('offcanvas-menu')) {
            body.classList.remove('offcanvas-menu');
            element.classList.remove('active');
        } else {
            body.classList.add('offcanvas-menu');
            element.classList.add('active');
        }

    }
    $('body').on('click', '.js-menu-toggle', function (e) {
    })

    var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	

    useEffect(() => {

        siteSticky();

        window.addEventListener('scroll', (e, a)=>{
            if(window.scrollY > 100){
                $('.js-sticky-header').addClass('shrink');
                // document.querySelector('.icon-menu').classList.style.color = 'white'
            } else {
                $('.js-sticky-header').removeClass('shrink');
                // document.querySelector('.icon-menu').classList.style.color = 'black'
            }

        })


        // avoid # in URL onClick in <a>
        document.querySelectorAll('a.nav-link, a.logo').forEach(el=>{
            el.addEventListener('click',(e)=>{
                    if (el.hash.charAt(0) === "#") {
                    e.preventDefault()
                    document.querySelector(el.hash).scrollIntoView()
                    }
            })
        })


        setTimeout(function () {

            var counter = 0;
            $('.site-mobile-menu .has-children').each(function () {
                var $this = $(this);
                console.log($this)

                $this.prepend('<span className="arrow-collapse collapsed">');

                $this.find('.arrow-collapse').attr({
                    'data-toggle': 'collapse',
                    'data-target': '#collapseItem' + counter,
                });

                $this.find('> ul').attr({
                    'class': 'collapse',
                    'id': 'collapseItem' + counter,
                });

                counter++;

            });

        }, 1000);

        $('body').on('click', '.arrow-collapse', function (e) {
            var $this = $(this);
            if ($this.closest('li').find('.collapse').hasClass('show')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
            e.preventDefault();

        });

        $(window).resize(function () {
            var $this = $(this),
                w = $this.width();

            if (w > 768) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        })



        // click outisde offcanvas
        $(document).mouseup(function (e) {
            var container = $(".site-mobile-menu");
            console.log()
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        });
    }, [])

    return (
        <>
            <MobileMenu toggleMobileMenu={toggleMobileMenu}/>
            <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">

                <div className="container">
                    <div className="d-flex align-items-center">
                        <div className="site-logo">

                            <a href="#home-section" className="logo"><img style={{width:'10rem'}}
                                    src={`${process.env.PUBLIC_URL}/${windowScrollY < 1 ? 'img/logo_lbn_w.png': 'img/logo_lbn_b.png'}`}
                                    alt='LBNodontologia Consultorio odontologico LBN - Villa Crespo, CABA. Argentina'></img></a>
                        </div>

                        <div>
                            <nav className="site-navigation position-relative text-right" role="navigation">
                                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                    <li><a href="#team-section" className="nav-link">Equipo</a></li>
                                    <li><a href="#specialties-section" className="nav-link">Especialidades</a></li>
                                    <li><a href="#technology-section" className="nav-link">Tecnología</a></li>
                                    <li><a href="#contact-section" className="nav-link">Contacto</a></li>
                                </ul>
                            </nav>
                        </div>
                        
                        <div className="ml-auto">
                            <div className="site-navigation position-relative text-right" role="navigation">
                                <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block">
                                        <li className="cta">
                                            <a role="button" href="https://www.facebook.com/LbnOdontologia/" className="btn btn-link col-4 d-inline-flex">
                                            <i className="fab fa-facebook-f "></i>
                                            </a>                                        
                                        
                                            <a role="button" href="https://www.instagram.com/lbnconsultorio/" className="btn btn-link col-4 d-inline-flex">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        
                                            <a role="button" href="https://api.whatsapp.com/send?phone=5491167485220&text=&source=&data=&app_absent=" className="btn btn-link col-4 d-inline-flex">
                                                <i className="fab fa-whatsapp"></i>
                                            </a>
                                        </li>

                                </ul>
                            </div>
                            <a href="/" onClick={toggleMobileMenu}
                                className={`d-inline-block d-lg-none site-menu-toggle js-menu-toggle ${windowScrollY < 1 ? 'text-white': 'text-black'}  float-right`}>
                                    <span className="icon-menu h3"></span></a>
                        </div>
                    </div>
                </div>

            </header>
        </>
        )
}

export default Navbar