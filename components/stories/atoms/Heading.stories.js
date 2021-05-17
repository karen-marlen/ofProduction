import React from 'react';
import Button from '../../atomic/atoms/Heading';

export default {
    title: 'Atoms/Heading',
    component: Heading,
}

export const Default = () => <Heading>Heading</Heading>
export const Primary = () => <Heading color='primary'>Primary</Heading>
export const Small = () => <Heading size='sm'>Heading</Heading>
export const ExtraSmall = () => <Heading size='xs'>Heading</Heading>