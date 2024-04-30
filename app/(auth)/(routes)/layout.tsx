export default function RootLayout({
    children
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className='bg-red-200 h-full text-white'>
        {children}
      </div>
    );
  }
  