
import { useGetMainMenu } from '@/apollo/actions';

export default (WrappedComponent) => (props) => {
  const { data: { mainMenus = null } = {}, loading, error } = useGetMainMenu();

  if (
    !loading &&
    typeof window === 'undefined'
  ) {
    console.log(mainMenus)
  }

  if (mainMenus) {
    return <WrappedComponent {...props} mainMenus={mainMenus} />
  }
  else {
    return <WrappedComponent {...props} />
  }
}
