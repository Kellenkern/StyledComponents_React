import React from "react"
import alimentacao from '../assets/images/alimentacao.svg'
import utilidades from '../assets/images/utilidades.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import { IconeTema } from "./UI"

export default (type) => {
    const Images = {
        Restaurante: <IconeTema src={alimentacao} alt='restaurante' />,
        Utilidades: <IconeTema src={utilidades} alt='utilidades' />,
        Saude: <IconeTema src={saude} alt='saude' />,
        Transporte: <IconeTema src={transporte} alt='transporte' />,
        Outros: <IconeTema src={outros} alt='outros' />
    };
    return Images[type] || Image.default
}