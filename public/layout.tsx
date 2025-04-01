import LayoutHandler from '../app/components/Layout/Layout';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutHandler>
      {children}
    </LayoutHandler>
  );
}