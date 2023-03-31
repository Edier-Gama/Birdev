import './globals.css'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link href='https://fonts.googleapis.com/css2?family=Inter:wght@300;600;700;800;900&display=swap' rel='stylesheet' />
        <title>Birdev</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
