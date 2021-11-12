import { ComponentStory, Meta } from '@storybook/react'
import React from 'react'
import { Button } from './Button'

export default {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: '共通で使用できるボタンコンポーネント',
      },
    },
  },
} as Meta

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
  variant: 'secondary',
  children: 'Button',
}

export const Danger = Template.bind({})
Danger.args = {
  variant: 'danger',
  children: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Button',
}
