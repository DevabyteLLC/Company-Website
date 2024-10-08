import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogList from '../../components/BlogList';
import Header2 from "../../components/Header2/Header2";


const BlogPage = (props) => {

    return (
        <Fragment>
            <Header2 />
            <main className="page_content blog-page">
                <PageTitle pageTitle={'Our Latest Blog'} pagesub={'Blogs😍'} pageTop={'Our'}/>
                <BlogList/>
            </main>
            <CtaSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogPage;
