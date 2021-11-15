import { ComponentStory, Meta } from '@storybook/react'
import React from 'react'
import { Header } from '../../ui/Header/Header'
import { UserLabel } from '../../ui/UserLabel/UserLabel'
import { DefaultLayout } from './DefaultLayout'

export default {
  title: 'Layouts/DefaultLayout',
  component: DefaultLayout,
  parameters: {
    docs: {
      description: {
        component: 'デフォルトのページレイアウトコンポーネント',
      },
    },
  },
} as Meta

const UserAction = () => {
  const userImg = '/assets/user-sample.png'
  const userName = '名前花子'
  return <UserLabel userImg={userImg} userName={userName} />
}

const Template: ComponentStory<typeof DefaultLayout> = (args) => (
  <DefaultLayout
    header={<Header pageTitle="テストページ" userAction={<UserAction />} />}
  >
    <h2>ページコンテンツ部分</h2>
    <p>ページコンテンツが入ります。</p>
  </DefaultLayout>
)

export const Default = Template.bind({})
