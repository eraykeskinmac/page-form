import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return <div className="flex flex-col min-h-screen min-w-full bg-background max-h-screen">
    <nav className="flex justi">
      <Logo/>
      <ThemeSwitcher/>
      <UserButton afterSignOutUrl="/sign-in"/>
    </nav>
    <main className="flex w-full flex-grow">{children}</main>
  </div>
}

export default Layout;
