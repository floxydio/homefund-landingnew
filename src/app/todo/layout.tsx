export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <title>Todo App</title>
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    )
}