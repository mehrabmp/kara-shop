import { Fragment, useState } from 'react';
import { Listbox as List, Transition } from '@headlessui/react';
import { BsChevronExpand } from 'react-icons/bs';

interface Item {
  name: string;
  value: string;
}

interface Props {
  items: Item[];
  defaultOptionIdx?: number;
  onSelect: (item: Item) => void;
}

export const Listbox = ({ items, defaultOptionIdx = 0, onSelect }: Props) => {
  const [selected, setSelected] = useState(items[defaultOptionIdx]);

  return (
    <div className="z-50 w-48">
      <List
        value={selected}
        onChange={item => {
          setSelected(item);
          onSelect(item);
        }}
      >
        <div className="relative">
          <List.Button className="relative w-full cursor-pointer rounded-lg border border-solid border-neutral-200 bg-white py-2  pl-3 pr-10 text-left sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <BsChevronExpand
                className="h-4 w-4 text-neutral-400"
                aria-hidden="true"
              />
            </span>
          </List.Button>
          <Transition
            as={Fragment}
            enter="transition duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100 translate-y-1"
            leave="transition duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 translate-y-1"
          >
            <List.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {items.map((item, index) => (
                <List.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 px-4 ${
                      active ? 'bg-violet-100 text-violet-900' : 'text-gray-900'
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {item.name}
                    </span>
                  )}
                </List.Option>
              ))}
            </List.Options>
          </Transition>
        </div>
      </List>
    </div>
  );
};
