import { shallowEqual, useSelector } from 'react-redux'
import { userProfileSelector } from '../../../ducks/auth/authSelector'

export const UserProfile = () => {
  const userProfile = useSelector(userProfileSelector, shallowEqual)
  return (
    <>
      <p>UserName：{userProfile?.name}</p>
      <p>
        <img src={userProfile?.picture} />
      </p>
    </>
  )
}
