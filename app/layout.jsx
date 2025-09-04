import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
    title: {
        default: 'Welcome!',
        template: '%s | Jurassic Revived'
    }
}

const banner = (
  <Banner storageKey="some-key">
    <a
      href="https://modrinth.com/mod/jurassic-revived/version/0.9.7"
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: 'underline', textUnderlineOffset: '2px' }}
    >
      Jurassic Revived 0.9.7
    </a>{' '}
     is released 🎉
  </Banner>
)
const navbar = (
    <Navbar
        logo={<b>Jurassic Revived</b>}
        // ... Your additional navbar options
        chatLink="https://discord.gg/eeqd6V3e"
    />
)
const footer = <Footer>{new Date().getFullYear()} © Jurassic Revived.</Footer>

export default async function RootLayout({ children }) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
        <Head
            // ... Your additional head options
        >
            {/* Your additional tags should be passed as `children` of `<Head>` element */}
        </Head>
        <body>
        <Layout
            banner={banner}
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/eligibbs/jrsite/tree/main/docs"
            editLink=""
            feedback={{ content: null, labels: 'feedback' }}
                footer={footer}
            // ... Your additional layout options
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}