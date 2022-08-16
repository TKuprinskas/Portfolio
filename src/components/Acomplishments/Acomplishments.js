import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
    { number: 1000, text: 'Hours of coding' },
    { number: 3, text: 'Websites Live' },
    { number: 1, text: 'Junior Full Stack Certificate' },
];

const Acomplishments = () => (
    <Section>
        <SectionTitle>Acomplishments</SectionTitle>
        <Boxes>
            {data.map((card, index) => (
                <Box key={index}>
                    <BoxNum>{card.number}+</BoxNum>
                    <BoxText>{card.text}</BoxText>
                </Box>
            ))}
        </Boxes>
    </Section>
);

export default Acomplishments;
