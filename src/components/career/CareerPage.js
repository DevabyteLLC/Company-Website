import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/software-company-components/Footer/Footer';
import Header2 from "../../components/Header2/Header2";
import CareerGuideLineSection from "./CareerGuideline";

const CareerPage = (props) => {

    return (
        <Fragment>
            <Header2/>
            <main className="page_content about-page">
                <PageTitle pageTitle={'Careers'} pagesub={'Devabyte'} pageTop={'Unlock your career potential with'}/>
                <CareerGuideLineSection/>
            </main>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default CareerPage;