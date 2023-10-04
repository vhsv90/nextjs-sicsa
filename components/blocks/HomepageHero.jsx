import Link from 'next/link'

const HomepageHero = () => {

    return (
        <>
            <section className="section-box">
                <div className="banner-hero banner-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h1 className="text-display-2">
                                    I are
                                    <span className="color-green-900">awesome team</span>
                                    for your business dream
                                </h1>
                                <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                                    Integrated workflow designed for product
                                    teams. We create world-class development and
                                    branding pupa
                                </p>
                                <div className="mt-40">
                                    <Link href="/page-service-1"><a className="btn btn-black icon-arrow-right-white">Get Start</a></Link>
                                    <Link href="/page-about-1"><a className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">Learn More</a></Link>
                                </div>
                            </div>
                            <div className="col-lg-5 d-none d-lg-block">
                                <div className="banner-imgs">
                                    <div className="video-block shape-1">
                                        <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a>
                                        <span className="text-heading-4">Watch intro video</span>

                                    </div>
                                    <img className="img-responsive shape-2" alt="Agon" src="assets/imgs/page/homepage1/banner.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomepageHero