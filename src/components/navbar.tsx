import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import IconUtility from '@/utils/icon';
import React, { useContext, useRef, useEffect } from "react";
import { TranslationContext } from "@/components/DataContext";
import { useState } from "react";
import LanguageToggle from '@/utils/languageToggle';
import { SectionVisibility } from '../../declarations';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar(props: any) {
  const [section, setSection] = useState('Home');
  const {setIsSideBarOpen} = props;
  const translations = useContext(TranslationContext)?.translations;
  const sectionsRef = useRef<HTMLDivElement[]>([]); // To track section elements
  const sectionVisibilities: SectionVisibility[] = []; // To track visibility of sections
  const isManualClickRef = useRef(false); // To track manual clicks

  const navigation = translations?.sections.map((section: string) => {
      return {
        name: section,
        href: `#${section}`
      }
  }) || [];

  useEffect(() => {
    if (!translations) return; // Do nothing if translations are not loaded yet

    // Clear previous refs
    sectionsRef.current = [];

    // Get all the section elements by their IDs
    const sectionElements = navigation.map((item: { name: string; href: string }) =>
      document.getElementById(item.name)
    );
    sectionsRef.current = sectionElements.filter(
      (el: any): el is HTMLDivElement => el !== null
    );
    // if (isManualClickRef.current && !visibleSections.includes(section)) {
    //   // Skip observer updates if a manual click recently occurred and not reached the section yet
    //   return;
    // }
    // setSection(mostVisibleSection);
    // isManualClickRef.current = false; // Reset manual click flag
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = (entry.target as HTMLElement).id;
        const ratio = entry.intersectionRatio;
    
        const index = sectionVisibilities.findIndex(item => item.sectionId === id);
        if (index !== -1) {
          sectionVisibilities[index].visibleRatio = ratio;
        } else {
          sectionVisibilities.push({
            sectionId: id,
            visibleRatio: ratio
          });
        }
      });
    
      // Find the most visible section by ratio
      const mostVisible = sectionVisibilities.reduce((max, current) =>
        current.visibleRatio > max.visibleRatio ? current : max,
        { sectionId: '', visibleRatio: 0 } as SectionVisibility
      );
      if (isManualClickRef.current && mostVisible.sectionId !== section) {
        // Skip observer updates if a manual click recently occurred and not reached the section yet
        return;
      }
      if (mostVisible.sectionId !== '') {
        setSection(mostVisible.sectionId);
        isManualClickRef.current = false; // Reset manual click flag
      }
    }, {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    });

    // Start observing the sections
    sectionsRef.current.forEach((sectionElement) => {
      if (sectionElement) observer.observe(sectionElement);
    });

    // Cleanup observer on unmount
    return () => {
      sectionsRef.current.forEach((sectionElement) => {
        if (sectionElement) observer.unobserve(sectionElement);
      });
    };
  }, [navigation, translations]);

  // Handle manual click on the navbar
  const handleNavClick = (sectionName: string) => {
    isManualClickRef.current = true; // Indicate a manual click
    setSection(sectionName); // Immediately update the section state
    setIsSideBarOpen(false); // Close the sidebar if open
  };

  // Render a fallback UI if translations are not ready
  if (!translations) {
    return (
      <></>
    );
  }

  return (
    <Disclosure as="nav" className="bg-[#0A0A72] md:sticky top-0 z-8">
      <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton onClick={() => {setIsSideBarOpen((oldValue: boolean) => !oldValue);}} className="group relative inline-flex items-center justify-center rounded-md p-2 text-bg-blue-400 hover:bg-blue-400 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center md:items-stretch">
            <div className="hidden md:ml-6 md:block">
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
                      onClick={() => handleNavClick(item.name)}
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <LanguageToggle />
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
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
                onClick={() => handleNavClick(item.name)}
              >
                {item.name}
              </DisclosureButton>
            </div>
          ))}
          <div className='mt-2'>
            <LanguageToggle />
          </div>
          <div className='pt-5' style={{ display: 'flex', gap: '50px' }}>
            <IconUtility Icon={FaGithub} link={'https://github.com/Truvella99'} />
            <IconUtility Icon={FaLinkedin} link={'https://www.linkedin.com/in/domenico-gagliardo-3256ba229/'} />
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
