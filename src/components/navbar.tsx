import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import IconUtility from '@/utils/icon';

const navigation = [
  { name: 'Home', href: '#Home' },
  { name: 'Informations', href: '#Informations' },
  { name: 'Skills', href: '#Skills' },
  { name: 'Formation', href: '#Formation' },
  { name: 'Projects', href: '#Projects' },
  { name: 'Contact Me', href: '#Contact' },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar(props: any) {
  const { section, setSection } = props;
  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={(item.name === section) ? 'page' : undefined}
                    className={classNames(
                      (item.name === section) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                    onClick={() => setSection(item.name)}
                  >
                    {item.name}
                  </a>
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
        <div className="flex flex-col items-center space-y-1 px-2 pt-2 pb-3 h-screen">
          <Image
            className="rounded-full"
            src="./profile-img.jpg"
            alt="Profile Image"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-2xl font-bold pt-5 pb-5">Domenico Gagliardo</h1>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={(item.name === section) ? 'page' : undefined}
              className={classNames(
                (item.name === section) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          <IconContext.Provider value={{ size: '2em', className: "global-class-name" }}>
            <div className='pt-5' style={{ display: 'flex', gap: '50px' }}>
              <IconUtility Icon={FaGithub} link={'https://github.com/Truvella99'}/>
              <IconUtility Icon={FaLinkedin} link={'https://www.linkedin.com/in/domenico-gagliardo-3256ba229/'}/>
            </div>
          </IconContext.Provider>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
