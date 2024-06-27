'use client';
import { PreProps } from '@/types/index';
import { Suspense, useRef, useState } from 'react';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';
import Pre from './Pre';

const AuthPre: React.FC<PreProps> = ({ language, children }) => {
  return (
    <AuthenticatedLayout>
      <Pre language={'JavaScript'}>{children}</Pre>
    </AuthenticatedLayout>
  );
};

export default AuthPre;
