import React, {useEffect} from 'react'
import {
    BannerContainer,
    BannerContent,
    BannerLink,
    BannerLinkWrapper,
    BannerText,
    BannerTextWrapper,
    BannerWrapper,
    LinkHeader
} from './BannerElements'
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'

const BannerSection = (props) => {

    const [ref, inView] = useInView({
        threshold:0.8,
        triggerOnce:true
    })

    const animation = useAnimation()

    const bannerVariant = {
        hidden:{
            y:'-100%'
        },
        show:{
            y:0,
            transition:{
                duration:1
            }
        },
        exit:{
            opacity:0
        },
    }
    useEffect(()=>{
        if(inView){
            animation.start('show')
        }
        else{
            // animation.start('hidden')
        }
    },[inView, animation])
    return (
        <BannerContainer>
            <BannerWrapper>
                <BannerContent ref={ref}>
                    <BannerTextWrapper>
                        <BannerText
                            variants={bannerVariant}
                            initial='hidden'
                            animate={animation}
                            exit='exit'
                        >
                            {props.data.text}
                        </BannerText>
                    </BannerTextWrapper>
                    <BannerTextWrapper>
                    {
                        props.data.link && (
                            <BannerLinkWrapper
                                variants={bannerVariant}
                                initial='hidden'
                                animate={animation}
                                exit='exit'
                            >
                                {/* <LinkHeader>Quick Links: </LinkHeader> */}
                                <BannerLink to='/'>
                                    Home
                                </BannerLink>
                                <BannerLink to='/about'>
                                    About 
                                </BannerLink>
                                <BannerLink to='/projects'>
                                    Project
                                </BannerLink>
                            </BannerLinkWrapper>
                        )
                    }               
                    </BannerTextWrapper>
                </BannerContent>
            </BannerWrapper>
        </BannerContainer>

    )
}

export default BannerSection