import { globalStyles } from '@/styles/globals'
import type { AppProps } from 'next/app'
import logoShop from '../assets/logoShop.svg'
import Image from 'next/image'
import { Container, Header } from '@/styles/pages/app'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoShop} alt="" width={68} />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
