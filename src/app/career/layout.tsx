export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <title>Career Page | HomeFunding</title>
            </head>
            <body>{children}</body>
        </html>
    )
}