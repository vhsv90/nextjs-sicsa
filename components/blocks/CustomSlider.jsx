import Link from 'next/link'

const CustomSlider = ({ activeIndex }) => {

    return (
        <>
            <section className="section-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-sm-1 col-12" />
                        <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                            <h2 className="text-heading-1 color-gray-900">
                                See why we are trusted<br className="d-lg-block d-none" />the world over
                            </h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit
                                laborum — semper quis lectus nulla.
                            </p>
                        </div>
                        <div className="col-lg-2 col-sm-1 col-12" />
                    </div>
                </div>
                <div className="container">
                    <div className="text-center mt-90">
                        <ul className="nav" role="tablist">
                            <li onClick={() => handleOnClick(1)}>
                                <Link href="/#tab-1">
                                    <a className={activeIndex === 1 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Branding</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(2)}>
                                <Link href="/#tab-2">
                                    <a className={activeIndex === 2 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Development</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(3)}>
                                <Link href="/#tab-3">
                                    <a className={activeIndex === 3 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Animation</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(4)}>
                                <Link href="/#tab-4">
                                    <a className={activeIndex === 4 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>User Experience</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(5)}>
                                <Link href="/#tab-5">
                                    <a className={activeIndex === 5 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Social Network</a>
                                </Link>
                            </li>
                            <li onClick={() => handleOnClick(6)}>
                                <Link href="/#tab-6">
                                    <a className={activeIndex === 6 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Marketing</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="tab-content">
                        <div className={activeIndex === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                            <div className="bg-2 panel-box mt-50">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="box-optimized">
                                            <h3 className="text-heading-2">
                                                Optimize and scale, easy to
                                                start
                                            </h3>
                                            <p className="text-body-excerpt mt-30">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute
                                                irure dolor in reprehenderit in
                                                voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur.
                                            </p>
                                            <div className="mt-40">
                                                <Link href="/page-service-1"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="block-video icon-pattern">
                                            <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a>


                                            <img className="img-responsive" src="assets/imgs/page/homepage1/img-1.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 2 ? "tab-pane fade  active show" : "tab-pane fade "}>
                            <div className="bg-1 panel-box mt-50">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="box-optimized">
                                            <h3 className="text-heading-2">
                                                Design Studios That Everyone
                                                Should Know
                                            </h3>
                                            <p className="text-body-excerpt mt-30">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute
                                                irure dolor in reprehenderit in
                                                voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur.
                                            </p>
                                            <div className="mt-40">
                                                <Link href="/page-service-1"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="block-video icon-pattern">
                                            <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-2.jpg" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 3 ? "tab-pane fade  active show" : "tab-pane fade "}>
                            <div className="bg-3 panel-box mt-50">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="box-optimized">
                                            <h3 className="text-heading-2">
                                                We can blend colors multiple
                                                ways
                                            </h3>
                                            <p className="text-body-excerpt mt-30">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute
                                                irure dolor in reprehenderit in
                                                voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur.
                                            </p>
                                            <div className="mt-40">
                                                <Link href="/page-service-1"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="block-video icon-pattern">
                                            <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-3.jpg" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 4 ? "tab-pane fade  active show" : "tab-pane fade "}>
                            <div className="bg-4 panel-box mt-50">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="box-optimized">
                                            <h3 className="text-heading-2">
                                                Choose The Best Plan That's For
                                                You
                                            </h3>
                                            <p className="text-body-excerpt mt-30">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute
                                                irure dolor in reprehenderit in
                                                voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur.
                                            </p>
                                            <div className="mt-40">
                                                <Link href="/page-service-1"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="block-video icon-pattern">
                                            <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-4.jpg" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 5 ? "tab-pane fade  active show" : "tab-pane fade "}>
                            <div className="bg-5 panel-box mt-50">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="box-optimized">
                                            <h3 className="text-heading-2">
                                                Subscribe our newsletter to get
                                                gift
                                            </h3>
                                            <p className="text-body-excerpt mt-30">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute
                                                irure dolor in reprehenderit in
                                                voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur.
                                            </p>
                                            <div className="mt-40">
                                                <Link href="/page-service-1"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="block-video icon-pattern">
                                            <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-5.jpg" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 6 ? "tab-pane fade  active show" : "tab-pane fade "}>
                            <div className="bg-6 panel-box mt-50">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="box-optimized">
                                            <h3 className="text-heading-2">
                                                Ready to get started? Create and
                                                Account
                                            </h3>
                                            <p className="text-body-excerpt mt-30">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                                Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco
                                                laboris nisi ut aliquip ex ea
                                                commodo consequat. Duis aute
                                                irure dolor in reprehenderit in
                                                voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur.
                                            </p>
                                            <div className="mt-40">
                                                <Link href="/page-service-1"><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="block-video icon-pattern">
                                            <a className="popup-youtube btn-play-video" onClick={() => setOpen(true)}></a><img className="img-responsive" src="assets/imgs/page/homepage1/img-1-6.jpg" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CustomSlider