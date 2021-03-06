import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <title>Mi Portfolio</title>
            <meta name="description" content= "Silvina Saucedo Portfolio Website" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"/>
          
            </Head>
            <body data-spy="scroll" data-target="#navbarResponsive">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument