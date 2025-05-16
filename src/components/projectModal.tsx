import { Dialog, DialogBackdrop, DialogPanel, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { IoCloseSharp, IoChevronBack, IoChevronForward } from "react-icons/io5"
import { FaCode } from "react-icons/fa"
import { ProjectModalProps } from '../../declarations'
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'
import { isMobile } from '@/utils/isMobile'
import IconUtility from './icon'

const processProjectDescription = (str: string) => {
  const regex = /<a href='([^']+)' target='_blank'>([^<]+)<\/a>/g;
  let lastIndex = 0;
  const segments = [];

  str.replace(regex, (match, url, text, index) => {
    segments.push(str.slice(lastIndex, index)); // Push text before the <a> tag
    segments.push(<a key={index} href={url} target="_blank" className="text-white underline hover:text-cyan-500">{text}</a>);
    lastIndex = index + match.length;
    return match;
  });
  // Add any remaining text after the last <a> tag
  segments.push(str.slice(lastIndex));
  return segments;
};

export default function ProjectModal({
  open,
  setOpen,
  project,
  setProject,
  projects
}: ProjectModalProps) {
  const [disableLeftArrow, setDisableLeftArrow] = useState(false);
  const [disableRightArrow, setDisableRightArrow] = useState(false);

  const updateArrowsState = (currentIndex: number) => {
    // Disable Rigth Arrow logic
    if ((currentIndex + 1) < projects.length - 1) {
      setDisableRightArrow(false);
    } else {
      setDisableRightArrow(true);
    }
    // Disable Left Arrow logic
    if ((currentIndex - 1) > 0) {
      setDisableLeftArrow(false);
    } else {
      setDisableLeftArrow(true);
    }
  };

  const goToNextProject = () => {
    const currentIndex = projects.findIndex(p => p.id === project?.id)
    if (currentIndex < projects.length - 1) {
      setProject(projects[currentIndex + 1])
    }
    updateArrowsState(currentIndex);
  }

  const goToPrevProject = () => {
    const currentIndex = projects.findIndex(p => p.id === project?.id)
    if (currentIndex > 0) {
      setProject(projects[currentIndex - 1])
    }
    updateArrowsState(currentIndex);
  }

  // Keyboard navigation
  useEffect(() => {
    if (!open) return

    setDisableLeftArrow(projects.findIndex(p => p.id === project?.id) === 0);
    setDisableRightArrow(projects.findIndex(p => p.id === project?.id) === projects.length - 1);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevProject()
      } else if (e.key === 'ArrowRight') {
        goToNextProject()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, project]);

  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <DialogBackdrop className="fixed inset-0 bg-black/80 transition-opacity" />

        <div className="fixed inset-0 z-20 w-screen h-screen overflow-y-auto">
          <div className="flex h-full w-full items-center justify-center p-0">

            <Transition.Child
              as="div"
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="relative h-[80vh] lg:w-[70vw] w-[80vw] transform overflow-visible bg-[var(--background)] text-left shadow-xl transition-all rounded-xl">

                {/* Left Arrow */}
                <div
                  className={`absolute -left-10 top-1/2 -translate-y-1/2 z-20 ${disableLeftArrow ? 'opacity-50 text-white' : 'cursor-pointer text-white hover:text-gray-300'}`}
                  onClick={() => {
                    if (disableLeftArrow) return;
                    goToPrevProject();
                  }}
                >
                  <IoChevronBack size={32} />
                </div>

                {/* Right Arrow */}
                <div
                  className={`absolute -right-10 top-1/2 -translate-y-1/2 z-20 ${disableRightArrow ? 'opacity-50 text-white' : 'cursor-pointer text-white hover:text-gray-300'}`}
                  onClick={() => {
                    if (disableRightArrow) return;
                    goToNextProject();
                  }}
                >
                  <IoChevronForward size={32} />
                </div>

                {/* Close button */}
                <div className="absolute right-4 top-4 text-white hover:text-gray-500 cursor-pointer z-30">
                  <IoCloseSharp
                    size={isMobile() ? 18 : 24}
                    onClick={() => {
                      setOpen(false)
                      setProject(null)
                    }}
                  />
                </div>

                {/* Code Button 
                <div
                  onClick={() => window.open(project?.link, '_blank')}
                  className="absolute right-5 bottom-2 flex items-center space-x-2 bg-[#51a2ff] rounded-full p-2 cursor-pointer z-10"
                >
                  <span className="text-sm text-black font-semibold">Code</span>
                  <FaCode className="text-black/60" size={20} />
                </div>
                */}

                {/* Modal Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={project?.id} // key triggers animation when project changes
                    initial={{ opacity: 0, x: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full px-6 pt-6 pb-4 flex flex-col items-center space-y-6 overflow-auto"
                  >
                    <Image
                      src={(project?.image) ? project.image : ''}
                      alt="Illustration"
                      width={300}
                      height={300}
                      className="h-[75%] w-full object-contain"
                    />
                    <div className="w-full text-white text-base">
                      <div className="flex gap-8 items-center">
                        <h1 className="text-2xl">{project?.name || ''}</h1>
                        <IconUtility Icon={FaCode} link={project?.link || ''} />
                      </div>
                      {processProjectDescription((project?.description) ? project.description : '')}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </DialogPanel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
