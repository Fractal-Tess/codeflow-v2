import { BackgroundLayout } from './_components/BackgroundLayout.client';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <BackgroundLayout>{children}</BackgroundLayout>;
}
