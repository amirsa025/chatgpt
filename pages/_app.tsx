import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from "@/app/mainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
  )
}
