import { Helmet, HelmetProvider } from 'react-helmet-async';
import './index.scss'

const HelmetLBN = () => {



    return (
        <HelmetProvider>

            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
                <script className='structured-data-list' type="application/ld+json">{` 
                    
                        "@context": "https://schema.org",
                        "@type": "Dentist",
                        "image": [
                            "https://www.odontologialbn.com.ar/storage/img/home/consultorioLBNOdontologia_1.jpg",
                            "https://www.odontologialbn.com.ar/storage/img/home/consultorioLBNOdontologia_0_mobile.jpg",
                            "https://www.odontologialbn.com.ar/storage/img/tecno/atencionLBNOdontologia.jpg"
                        ],
                        "@id": "https://www.odontologialbn.com.ar",
                        "name": "LBN Odonbtología",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Av. Corrientes 4924 - Piso 6",
                            "addressLocality": "Buenos Aires",
                            "addressRegion": "BUE",
                            "postalCode": "C1414",
                            "addressCountry": "ARG"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": -34.601156,
                            "longitude": -58.435351
                        },
                        "url": "https://www.odontologialbn.com.ar/#contacto",
                        "telephone": "+5491167485220",
                        "openingHoursSpecification": [
                            {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday"
                            ],
                            "opens": "10:00",
                            "closes": "20:00"
                            },
                            {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": "Saturday",
                                "opens": "10:00",
                                "closes": "13:00"
                            }
                        ]
            
                `}</script>



            </Helmet>
        </HelmetProvider>
    )
}

export default HelmetLBN