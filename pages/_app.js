import UserState from '@/components/context/userState'
import '@/styles/globals.css'
import Footer from 'components/footer'
import Navbar from 'components/header/navbar'

export default function App({ Component, pageProps }) {
  
  return <UserState><Navbar /><Component {...pageProps} /><Footer/></UserState>
}
