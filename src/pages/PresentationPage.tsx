import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import DefaultLayout from '../layouts/DefaultLayout';

import testPresentation from './presentations/testPresentation';

import { RootState } from '../redux/rootReducer';

const PresentationPage = (): JSX.Element => {
    const [ slideNumber, setSlideNumber ] = useState(0);
    const { mainSocket } = useSelector((state: RootState) => state.socket);

    useEffect(() => {
        let isMounted = true;
        mainSocket && mainSocket.on('next_slide', (data: number) => {
            if (isMounted) {
                if (slideNumber > 0 && data == -1) {
                    setSlideNumber(slideNumber => slideNumber + data);
                } else if (slideNumber < testPresentation.slides.length - 1 && data == 1) {
                    setSlideNumber(slideNumber => slideNumber + data);
                }
            }
        });
        return () => { isMounted = false };
    }, [mainSocket, slideNumber]);

    const currentSlide = testPresentation.slides[slideNumber];
    
    return (
        <DefaultLayout>
            <h1>Presentation</h1>
            <h3>{currentSlide.title}</h3>
            <ul>
                {currentSlide.points.map(
                    (point, index) =>
                    <li key={index}>{point}</li>
                )}
            </ul>
            <ul>
                {currentSlide.questions.map(
                    (question, index) =>
                    <li key={index}><b>{question.title}?</b> {question.answer}</li>
                )}
            </ul>
        </DefaultLayout>
    );
}

export default PresentationPage;
