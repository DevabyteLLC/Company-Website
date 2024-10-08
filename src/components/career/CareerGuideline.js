import React from 'react'
import icon1 from '../../images/icons/icon_map_mark_2.svg'
import icon2 from '../../images/icons/icon_calling_2.svg'
import icon3 from '../../images/icons/icon_mail_3.svg'
import CareerForm from "./CareerForm";


const CareerGuideLineSection = (props) => {
    return (
        <section className="contact_section section_space bg-light">
            <div className="container">
                <div className="contact_info_box row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon1} alt="Map Mark SVG Icon"/>
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Application</h3>
                                <p className="mb-0">Kickstart your journey by submitting your application to Devabyte today.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon2} alt="Calling SVG Icon"/>
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Interview</h3>
                                <p className="mb-0">Join us for an interview to explore and unleash our shared potential.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="iconbox_block text-center">
                            <div className="iconbox_icon">
                                <img src={icon3} alt="User Check SVG Icon"/>
                            </div>
                            <div className="iconbox_content">
                                <h3 className="iconbox_title">Onboarding</h3>
                                <p className="mb-0">You're officially part of the squad! Welcome to an exciting journey of growth.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_space pb-0">
                    <div className="justify-content-lg-between">
                        <div className="contact_form mb-0">
                            <h3 className="details_item_info_title mb-1">Become a Part of Our Team</h3>
                            <p className="mb-5">Advance your career with a team of sharp-minded experts, offering rich experience and valuable perks.</p>
                            <CareerForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CareerGuideLineSection;