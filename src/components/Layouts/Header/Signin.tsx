import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { BsGithub } from 'react-icons/bs';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const Signin = ({ isOpen, onClose }: Props) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-semibold leading-6 text-gray-900"
                >
                  Sign in
                </Dialog.Title>
                <div className="mt-10">
                  <button
                    type="button"
                    className="my-1.5 flex w-full items-center justify-center gap-3 rounded-md border border-solid border-zinc-500 bg-white px-4 py-2 text-lg font-medium transition hover:bg-zinc-100"
                    onClick={() => signIn('google')}
                  >
                    <Image
                      src="/assets/google.svg"
                      alt="continue with google"
                      width="20"
                      height="20"
                    />
                    Continue with Google
                  </button>
                  <button
                    type="button"
                    className="my-1.5 flex w-full items-center justify-center gap-3 rounded-md bg-zinc-900 px-4 py-2 text-lg font-medium text-white transition hover:bg-black"
                    onClick={() => signIn('github')}
                  >
                    <BsGithub size="1.2rem" />
                    Continue with Github
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
