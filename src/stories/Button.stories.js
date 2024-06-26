import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@components/Button/button';


export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>;


