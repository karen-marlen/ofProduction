import React from 'react';
import Heading from '../../atomic/atoms/Heading';

export default {
    title: 'Atoms/Heading',
    component: Heading,
}

export const Default = () => <Heading>Heading</Heading>
export const ColorPrimary = () => <Heading color='primary'>Primary</Heading>
export const ColorDefaut = () => <Heading color='default'>Primary</Heading>
export const Medium = () => <Heading size='md'>Heading</Heading>
export const Small = () => <Heading size='sm'>Heading</Heading>
export const ExtraSmall = () => <Heading size='xs'>Heading</Heading>