import { ComponentStory, Meta } from '@storybook/react'
import React from 'react'
import { UserLabel } from './UserLabel'

export default {
  title: 'Header/UserLabel',
  component: UserLabel,
  parameters: {
    docs: {
      description: {
        component: 'ユーザー情報コンポーネント',
      },
    },
  },
} as Meta

const Template: ComponentStory<typeof UserLabel> = (args) => (
  <UserLabel {...args} />
)

export const Default = Template.bind({})

export const Login = Template.bind({})
Login.args = {
  userImg: '/assets/user-sample.png',
  userName: '名前花子',
}
