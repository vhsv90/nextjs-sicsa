import Link from 'next/link'

const LatestBlogs = () => {

    return (
        <>
            <section className="section-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <h3 className="text-heading-1 mb-10">Latest News</h3>
                            <p className="text-body-lead-large color-gray-600">
                                From Our blog and Event fanpage
                            </p>
                        </div>
                        <div className="col-lg-4 text-lg-end text-start pt-30">
                            <Link href="/blog-1"><a className="btn btn-black icon-arrow-right-white">View More</a></Link>
                        </div>
                    </div>
                </div>
                <div className="container mt-90">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 pr-30">
                            <div className="card-grid-style-4">
                                <span className="tag-dot">Company</span><Link href="/blog-single"><a className="text-heading-4">We can blend colors multiple ways, the most
                                    common</a></Link>
                                <div className="grid-4-img">
                                    <Link href="/blog-single">
                                        <a><img src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" /></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 pr-30">
                            <div className="card-grid-style-4">
                                <span className="tag-dot">Marketing Event</span><Link href="/blog-single"><a className="text-heading-4">How To Blow Through Capital At An
                                    Incredible Rate</a></Link>
                                <div className="grid-4-img">
                                    <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-2.png" alt="Agon" /></a></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 pr-30">
                            <div className="card-grid-style-4">
                                <span className="tag-dot">Customer Services</span><Link href="/blog-single"><a className="text-heading-4">Design Studios That Everyone Should Know
                                    About?</a></Link>
                                <div className="grid-4-img color-bg-4">
                                    <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-3.png" alt="Agon" /></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LatestBlogs