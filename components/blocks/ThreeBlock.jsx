import Link from 'next/link'

const ThreeBlock = () => {

    return(
        <>
            <section className="section-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-sm-1 col-12" />
                        <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
                            <h2 className="text-heading-1 color-gray-900">
                                We facilitate the creation<br className="d-lg-block d-none" />of strategy and design
                            </h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                Interactively transform magnetic growth
                                strategies whereas prospective "outside the
                                box" thinking.
                            </p>
                        </div>
                        <div className="col-lg-2 col-sm-1 col-12" />
                    </div>
                </div>
                <div className="container mt-70">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="card-grid-1 bg-5 bg-business hover-up">
                                <div className="grid-1-img">
                                    <img src="/assets/imgs/page/homepage1/business-strategy.svg" alt="Agon" />
                                </div>
                                <h3 className="text-heading-3 mt-20">
                                    Business Strategy
                                </h3>
                                <p className="text-body-excerpt mt-20">
                                    You are always welcome to visit our little
                                    den. Professional in teir craft! All
                                    products were super amazing with strong
                                    attension to details, comps and overall
                                    vibe.
                                </p>
                                <div className="mt-30">
                                    <Link href="/page-about-1"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="card-grid-1 bg-9 bg-local hover-up">
                                <div className="grid-1-img">
                                    <img src="/assets/imgs/page/homepage1/local.svg" alt="Agon" />
                                </div>
                                <h3 className="text-heading-3 mt-20">
                                    Local Marketing
                                </h3>
                                <p className="text-body-excerpt mt-20">
                                    You are always welcome to visit our little
                                    den. Professional in teir craft! All
                                    products were super amazing with strong
                                    attension to details, comps and overall
                                    vibe.
                                </p>
                                <div className="mt-30">
                                    <Link href="/page-about-2"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="card-grid-1 bg-2 bg-social hover-up">
                                <div className="grid-1-img">
                                    <img src="/assets/imgs/page/homepage1/social.svg" alt="Agon" />
                                </div>
                                <h3 className="text-heading-3 mt-20">
                                    Social media
                                </h3>
                                <p className="text-body-excerpt mt-20">
                                    You are always welcome to visit our little
                                    den. Professional in teir craft! All
                                    products were super amazing with strong
                                    attension to details, comps and overall
                                    vibe.
                                </p>
                                <div className="mt-30">
                                    <Link href="/page-about-3"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThreeBlock