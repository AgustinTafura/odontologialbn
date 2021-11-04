import { useEffect } from 'react'
import './index.scss'
import $ from 'jquery'

const MobileMenu = ({toggleMobileMenu}) => {

    useEffect(() => {
        $('.js-clone-nav').each(function () {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });
    }, [])

    return (
        <div className="site-mobile-menu site-navbar-target">
            <div className="site-mobile-menu-header d-inline-flex justify-content-between">
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/logo_lbn_b_short.png`} alt="LBN logo odontologia" style={{width:'5rem'}} />
                </div>
                <div className="site-mobile-menu-close" onClick={toggleMobileMenu}>
                    <span className="icon-close2 js-menu-toggle"></span>
                </div>
            </div>
            <div className="site-mobile-menu-body">
                
            </div>
        </div>
        )
}

export default MobileMenu