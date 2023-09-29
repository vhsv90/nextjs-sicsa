import Layout from "@/components/Layout"
import { appWithTranslation } from 'next-i18next';

import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
}

export default appWithTranslation(MyApp)