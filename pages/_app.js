import '@public/css/app.2afad0c.bundle.css'
import '@public/css/swiper-custom.css'

import React, { useEffect, useState } from 'react'
import Preloader from '@components/elements/Preloader'

import { appWithTranslation } from 'next-i18next'

import dynamic from 'next/dynamic'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    )
}

export default appWithTranslation(MyApp)