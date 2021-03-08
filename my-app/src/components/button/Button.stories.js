import React from 'react';
import Button from './Button'
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'Example/Button',
    component: Button,
    decorator:[withKnobs],
}

export const basic = () => <Button>{text('Button text', 'Click here!')}</Button>;

export const BasicInc = () => <Button color='blue'>Button</Button>;

