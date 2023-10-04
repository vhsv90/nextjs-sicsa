import Link from 'next/link'

const Clients = () => {

    return (
        <>
            <div className="section-box overflow-visible mt-70">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                            <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-1.svg" /></a></Link>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                            <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-2.svg" /></a></Link>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                            <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-3.svg" /></a></Link>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                            <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-4.svg" /></a></Link>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                            <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-5.svg" /></a></Link>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                            <Link href="/#"><a className="item-logo box-hover-shadow hover-up"><img alt="Agon" src="assets/imgs/slider/logo/sample-logo-6.svg" /></a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients