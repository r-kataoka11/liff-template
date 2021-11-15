import { ComponentStory, Meta } from '@storybook/react'
import React from 'react'
import { UserActionPresenter as UserAction } from './UserAction'

export default {
  title: 'Header/UserAction',
  component: UserAction,
  parameters: {
    docs: {
      description: {
        component: 'ユーザー情報コンポーネント',
      },
    },
  },
} as Meta

const Template: ComponentStory<typeof UserAction> = (args) => (
  <UserAction {...args} />
)

export const Default = Template.bind({})

export const Login = Template.bind({})
Login.args = {
  userImg: '/assets/user-sample.png',
  userName: '名前花子',
}
