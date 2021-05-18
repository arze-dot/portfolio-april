import React from 'react'
import PropTypes from 'prop-types'


export default function Section(props) {
    const className = ['']
     className.push(props.className)
     if(props.isAbout)
     className.push("about")
     if(props.isPortfolio)
     className.push("portfolio")
     if(props.isSkills)
     className.push("skills")
     if(props.isFormsHireMe)
     className.push("forms-hire-me")
     if(props.isContact)
     className.push("contact")
     if(props.isMarginBottom)
     className.push("mb-5")
    return (
        <section className={className.join(" ")}>
            {props.children}
        </section>
    )
}

Section.PropTypes = {
    isAbout: PropTypes.bool,
    isPortfolio: PropTypes.bool,
    isSkills: PropTypes.bool,
    isFormsHireMe: PropTypes.bool,
    isContact: PropTypes.bool,
    isMarginBottom: PropTypes.bool,
    className: PropTypes.string,
}