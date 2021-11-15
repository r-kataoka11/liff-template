import { ComponentStory, Meta } from '@storybook/react'
import React from 'react'
import { UserActionPresenter } from '../UserAction/UserAction'
import { Header } from './Header'

export default {
  title: 'Header/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'ヘッダーコンポーネント',
      },
    },
  },
} as Meta

const UserAction = () => {
  const userImg = '/assets/user-sample.png'
  const userName = '名前花子'
  return <UserActionPresenter userImg={userImg} userName={userName} />
}

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args} userAction={<UserAction />} />
)

export const Default = Template.bind({})
Default.args = {
  pageTitle: 'ページタイトル',
}
