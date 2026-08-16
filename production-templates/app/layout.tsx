import type { Metadata } from "next";
import "./globals.css";
export const metadata:Metadata={title:"Tech Store OS · Production Templates v1.3",description:"Sistema reutilizable de producción visual para Tech Store B&B."};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="es-AR"><body>{children}</body></html>}
