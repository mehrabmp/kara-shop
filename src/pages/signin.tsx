import type { GetStaticProps } from 'next';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './_app';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PrimaryLayout } from 'components';
import { signIn } from 'next-auth/react';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async ({ locale = 'en' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
};

const Signin: NextPageWithLayout = () => {
  const { t } = useTranslation('header');

  return (
    <div className="mt-20 flex justify-center px-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-6 text-center text-base">
        <h3 className="mb-10 text-xl font-semibold leading-6 text-gray-900">
          Sign in
        </h3>
        <button
          type="button"
          className="my-1.5 flex w-full items-center justify-center gap-3 rounded-md border border-solid border-zinc-400 bg-white px-4 py-2 font-medium transition hover:bg-zinc-100"
          onClick={() => signIn('google')}
        >
          <Image
            src="/assets/google.svg"
            alt="continue with google"
            width="20"
            height="20"
          />
          {t('auth.google')}
        </button>
        <button
          type="button"
          className="my-1.5 flex w-full items-center justify-center gap-3 rounded-md bg-zinc-900 px-4 py-2 font-medium text-white transition hover:bg-black"
          onClick={() => signIn('github')}
        >
          <BsGithub size="1.2rem" />
          {t('auth.github')}
        </button>
        <button
          type="button"
          className="my-1.5 flex w-full items-center justify-center gap-3 rounded-md bg-[#1DA1F2] px-4 py-2 font-medium text-white transition hover:bg-[#0977ba]"
          onClick={() => signIn('twitter')}
        >
          <BsTwitter size="1.2rem" />
          {t('auth.twitter')}
        </button>
        <p className="mt-10 text-xs font-normal">
          By signing in, you agree to our{' '}
          <Link href="terms-service" className="text-blue-600 hover:underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="privacy-policy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

Signin.getLayout = function getLayout(page: ReactElement) {
  return (
    <PrimaryLayout
      title="Sign in | Kara Shop"
      description="Sign in page of Kara Shop"
    >
      {page}
    </PrimaryLayout>
  );
};

export default Signin;
