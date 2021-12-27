import React, {useEffect} from 'react'
import {
    InfoDescription,
    InfoHeading,
    InfoWrapper,
    TagHeader,
    TagWrapper,
    LinkWrapper,
    ProjectLink,
    SingleTag,
    GridWrapper,
    TagContent,
    AnimationWrapper,
    GridLinkWrapper,
    InfoContainer,
} from './DescriptionElements'
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'

const ProjectDescriptionSection = (props) => {

    const [ref,inView] = useInView({
        threshold:0.9,
        triggerOnce:true
    })

    const animation = useAnimation();

    const textVariant = {
        hidden:{
            y:'100%',
            transition:{
                duration:.5
            }
        },
        show:{
            y:0,
            transition:{
                duration:.5
            }
        },
        exit:{
            opacity:0
        }
    }

    const buttonVariant = {
        hidden:{
            x:'100%',
            transition:{
                duration:.5
            }
        },
        show:{
            x:0,
            transition:{
                delay:0.5,
                duration:.7
            }
        },
        exit:{
            opacity:0
        }
    }

    useEffect(()=>{
        if(inView){
            animation.start('show')
        }
    },[inView,animation])

    return (
        <InfoContainer>
            <InfoWrapper ref={ref}>
                <AnimationWrapper>
                    <InfoHeading variants={textVariant} animate={animation} initial='hidden'>Project Details</InfoHeading>
                </AnimationWrapper>
                <AnimationWrapper>
                    <InfoDescription variants={textVariant} animate={animation } initial='hidden'>{props.project.description}</InfoDescription>
                </AnimationWrapper>            
                <GridWrapper>
                    <TagContent>
                        <AnimationWrapper>
                            < TagHeader variants={textVariant} animate={animation} initial='hidden'>Tools used to create this project</TagHeader>
                        </AnimationWrapper>
                        <TagWrapper>
                            {
                                props.project.tags.map((tag,index)=>{
                                    return (
                                        <AnimationWrapper>
                                            <SingleTag variants={textVariant} animate={animation} initial='hidden' key={`tag${index}`}>{tag}</SingleTag>
                                        </AnimationWrapper>                                )
                                })
                            }
                        </TagWrapper>
                    </TagContent>
                    <GridLinkWrapper>
                        <AnimationWrapper>
                            <LinkWrapper variants={buttonVariant} animate={animation} initial='hidden'>
                                <ProjectLink href={props.project.codeSite} target="_blank">Source Code</ProjectLink>
                                <ProjectLink href={props.project.appSite} target="_blank">Visit Project Site</ProjectLink>
                            </LinkWrapper>
                        </AnimationWrapper>
                    </GridLinkWrapper>
                </GridWrapper>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default ProjectDescriptionSection