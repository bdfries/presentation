import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import DefaultLayout from '../layouts/DefaultLayout';

import testPresentation from './presentations/testPresentation';

import { RootState } from '../redux/rootReducer';

const PresentationPage = (): JSX.Element => {
    const [ slideNumber, setSlideNumber ] = useState(1);
    const { mainSocket } = useSelector((state: RootState) => state.socket);

    useEffect(() => {
        let isMounted = true;
        mainSocket && mainSocket.on('next_slide', (data: number) => {
            isMounted && setSlideNumber(slideNumber => slideNumber + data);
        });
        return () => { isMounted = false };
    }, [mainSocket]);

    const currentSlide = testPresentation.slides[slideNumber - 1];
    
    return (
        <DefaultLayout>
            <h1>Presentation</h1>
            <h3>{currentSlide.title}</h3>
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
