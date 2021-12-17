import React from 'react'
import {
    ViewContainer,
    ViewImage,
    ViewImageWrapper,
    ViewWrapper,
    BottomRow,
    AnimationWrapper
} from './ViewElements'
import LoadingScreen from '../LoadingScreen';
import { rectangles } from './LoadingData';

const ViewProject = (props) => {

    const imgVariant = {
        hidden:{
            clipPath: 'inset(0 100% 0 0)'
            // y:'-100%'
          },
          show:{
              clipPath: 'inset(0 0% 0 0)',
            // y:0,
            transition:{
                type:'tween',
                delay:1.5,
                duration:0.5,
            }
          },
          exit:{
              opacity:0
          },
    }

    const textVariant = {
        hidden:{
            // clipPath: 'inset(0 100% 0 0)'
            y:'-100%'
          },
          show:{
            //   clipPath: 'inset(0 0% 0 0)',
            y:0,
            transition:{
                type:'tween',
                delay:2.2,
                duration:0.5,
            }
          },
          exit:{
              opacity:0
          },
    }

    return (
        <React.Fragment>
            <LoadingScreen rectangles={rectangles}/>
            <ViewContainer>
                <ViewWrapper>
                    <ViewImageWrapper>
                        {/* <ViewImage variants={imgVariant} src={props.project.imgSrc}></ViewImage> */}
                    </ViewImageWrapper>
                    <AnimationWrapper>
                        <BottomRow variants={textVariant}>
                            {props.project.name}
                        </BottomRow>
                    </AnimationWrapper>

                </ViewWrapper>
            </ViewContainer>
        </React.Fragment>
    )
}

export default ViewProject