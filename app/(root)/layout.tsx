'use client';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';
import MobileNav from '@/components/MobileNav';
import Sidebar from '@/components/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: 'Vlad', lastName: 'JSM' };

  return (
    <main className="flex h-scren w-full font-inter">
        <Sidebar user={loggedIn} />

        <div className="flex size-full flex-col">

          <div className="root-layout"> 

            <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
            <div> 
                <MobileNav user = {loggedIn} />
            </div>
          </div>
          {children}
        </div>

        
    </main>
  );
}
