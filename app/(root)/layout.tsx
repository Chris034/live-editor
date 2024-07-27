import Header from "@/components/ui/Header";

export default function CoreLayout({ children }: {children: React.ReactNode}) {
  return (
    <>
        <Header />
        <main className="mx-28">{children}</main>
        {/* <Footer /> */}
    </>
  )
}
