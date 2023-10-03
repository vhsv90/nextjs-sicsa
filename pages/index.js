import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
// i18n
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// Layout
import Layout from '@components/layout/Layout'
// Page Blocks
import HomepageHero from '@components/blocks/HomepageHero'
import Clients from '@components/blocks/Clients'
import CustomSlider from '@components/blocks/CustomSlider'
import ThreeBlock from '@components/blocks/ThreeBlock'
import HImageHText from '@components/blocks/HImageHText'
import CustomSlider2 from '@components/blocks/CustomSlider2'
import HappyCustomer from '@components/blocks/HappyCustomer'
import LatestBlogs from '@components/blocks/LatestBlogs'
import Newsletter from '@components/elements/Newsletter'

export default function Home({ testimonials }) {

  const router = useRouter()
  const { t } = useTranslation('common')
  const [isOpen, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(1)

  const handleOnClick = (index) => setActiveIndex(index)

  if(testimonials)
    console.log('cmsData from strapi', testimonials)

  return (
    <Layout>

        { /* Hero Component */ }
        <HomepageHero />
        { /* Clients Component */ }
        <Clients />
        { /* Custom Slider Component */ }
        <CustomSlider activeIndex={activeIndex} />
        { /* ThreeBloc Component */ }
        <ThreeBlock />
        { /* Half Image Half Text Component */ }
        <HImageHText />
        { /* Custom Slider 2 Component */ }
        <CustomSlider2 />
        { /* Happy Cystomer Component */ }
        <HappyCustomer />
        { /* Latest Blog Entries Components */ }
        <LatestBlogs />
        { /* Price Services Componenet */ }
        { /* Newsletter Component */ }
        <Newsletter />

        {/* TODO: remo this test block */}

        {/*
        <p>Strapi test</p>
        <div style={{margin: '20px'}}>
            <h1>Index Page</h1>
            <h2>{testimonials[0].attributes.Name}</h2>
            <h3>{testimonials[0].attributes.Company}</h3>
            <h5>{testimonials[0].attributes.Testimony}</h5>

            <div>{t('current_locale')}: {t(router.locale)}</div>
            <div>
                <Link
                href={router.pathname}
                locale={router.locale === 'en' ? 'es-CR' : 'en'}>
                <button>
                    {t('change_locale')}
                </button>
                </Link>
            </div>
        </div> 
        */}

    </Layout>
  )
}

export const getServerSideProps = async ({ locale }) => {

    // strapi api call
    // entities: testimonials[], 
    // TODO: change the url to const or service
    const res = await fetch(`https://seal-app-qm6lw.ondigitalocean.app/api/testimonials?locale=${locale}`)
    const testimonialsData = await res.json()

    // TODO: remove log
    console.log(testimonialsData)

    return {
        props: {
            testimonials: testimonialsData.data,
            ...await serverSideTranslations(locale, ['common']),
          },
    }
}