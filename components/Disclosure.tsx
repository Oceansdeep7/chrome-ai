"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function DisclosureComponent({
    title="title",
    content="content"
  }) {
    return (
      <Disclosure defaultOpen>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg text-left text-lg focus:outline-none focus-visible:ring ">
              <span className='flex-1 font-semibold'>{title}</span>
              <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-7 w-7 text-theme`} />
            </Disclosure.Button>
            
            <Disclosure.Panel className="pt-3 text-base leading-6" >
              {content}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
}