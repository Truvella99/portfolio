import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import IconUtility from '@/utils/icon';
import React, { useContext } from "react";
import { TranslationContext } from "@/components/DataContext";
import { useState } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar(props: any) {
  const [section, setSection] = useState('Home');
  const {setIsSideBarOpen} = props;
  const translations = useContext(TranslationContext)?.translations;
  if (!translations) return null; // Handle case when translations are not yet loaded
  
  const navigation = translations.sections.map((section: string) => {
      return {
        name: section,
        href: `#${section}`
      }
  });

  return (
    <Disclosure as="nav" className="bg-[#0A0A72] sm:sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton onClick={() => {setIsSideBarOpen((oldValue: boolean) => !oldValue);}} className="group relative inline-flex items-center justify-center rounded-md p-2 text-bg-blue-400 hover:bg-blue-400 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item: any) => (
                  <div key={item.name} style={{ display: 'flex', alignItems: 'center' }}>
                    {/* <IconUtility Icon={item.Icon} /> */}
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={(item.name === section) ? 'page' : undefined}
                      className={classNames(
                        (item.name === section) ? 'bg-blue-400 text-white' : 'text-gray-300 hover:bg-blue-400 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium',
                      )}
                      onClick={() => setSection(item.name)}
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
                {/* <IconContext.Provider value={{ size: '2em', className: "global-class-name" }}>
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                    <IconUtility Icon={FaGithub} link={'https://github.com/Truvella99'}/>
                    <IconUtility Icon={FaLinkedin} link={'https://www.linkedin.com/in/domenico-gagliardo-3256ba229/'}/>
                  </div>
                </IconContext.Provider> */}
              </div>
            </div>
          </div>
  
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="flex flex-col items-center space-y-1 px-2 pt-2 pb-3 h-[75vh]">
          <Image
            className="bg-blue-400  rounded-full"
            src="./profile-img.png"
            alt="Profile Image"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-2xl font-bold pt-5 pb-5">{translations.name}</h1>
          {navigation.map((item: any) => (
            <div key={item.name} style={{ display: 'flex', alignItems: 'center' }}>
              {/* <IconUtility Icon={item.Icon}/> */}
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={(item.name === section) ? 'page' : undefined}
                className={classNames(
                  (item.name === section) ? 'bg-blue-400 text-white' : 'text-gray-300 hover:bg-blue-400 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium',
                )}
                onClick={() => setSection(item.name)}
              >
                {item.name}
              </DisclosureButton>
            </div>
          ))}
          <div className='pt-5' style={{ display: 'flex', gap: '50px' }}>
            <IconUtility Icon={FaGithub} link={'https://github.com/Truvella99'} />
            <IconUtility Icon={FaLinkedin} link={'https://www.linkedin.com/in/domenico-gagliardo-3256ba229/'} />
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
