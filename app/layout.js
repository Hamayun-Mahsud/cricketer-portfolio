import './styles/globals.css';

export const metadata = {
  title: 'Naseer Ullah - Cricketer Portfolio',
  description: 'Showcase of my cricket career achievements and matches played.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
