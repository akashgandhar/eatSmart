import UserState from '@/components/context/userState'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <UserState><Component {...pageProps} /></UserState>
}
