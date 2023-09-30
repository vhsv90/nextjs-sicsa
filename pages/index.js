import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

 import Layout from '@components/layout/Layout'
 
export default function Home({ testimonials }) {

  const router = useRouter()
  const { t } = useTranslation('common')

  if(testimonials)
    console.log('cmsData from strapi', testimonials)

  return (
    <Layout>
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
    </Layout>
  )
}

export const getServerSideProps = async ({ locale }) => {

    // strapi api call
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