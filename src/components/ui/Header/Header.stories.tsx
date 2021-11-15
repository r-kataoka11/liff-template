import { ComponentStory, Meta } from '@storybook/react'
import React from 'react'
import { UserLabel } from '../UserLabel/UserLabel'
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
  return <UserLabel userImg={userImg} userName={userName} />
}

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args} userAction={<UserAction />} />
)

export const Default = Template.bind({})
Default.args = {
  pageTitle: 'ページタイトル',
}
