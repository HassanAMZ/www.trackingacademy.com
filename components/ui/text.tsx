import clsx from 'clsx';
import React from 'react';

interface TextProps {
  alignment?: 'start' | 'center' | 'end' | 'justify';
  applyMargin?: boolean;
  as?:
    | 'dt'
    | 'dd'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'strong'
    | 'legend'
    | 'ol'
    | 'ul'
    | 'li';
  breakWord?: boolean;
  children: React.ReactNode;
  tone?:
    | 'base'
    | 'disabled'
    | 'inherit'
    | 'success'
    | 'critical'
    | 'caution'
    | 'subdued'
    | 'text-inverse'
    | 'text-inverse-secondary'
    | 'magic'
    | 'magic-subdued';
  fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
  id?: string;
  numeric?: boolean;
  truncate?: boolean;
  variant?:
    | 'headingXs'
    | 'headingSm'
    | 'headingMd'
    | 'headingLg'
    | 'headingXl'
    | 'heading2xl'
    | 'heading3xl'
    | 'bodyXs'
    | 'bodySm'
    | 'bodyMd'
    | 'bodyLg';
  visuallyHidden?: boolean;
  textDecorationLine?: 'line-through';
  className?: string;
}

const Text: React.FC<TextProps> = ({
  alignment,
  as: Component = 'span',
  breakWord,
  children,
  applyMargin,
  tone,
  fontWeight,
  id,
  numeric,
  truncate,
  variant = 'bodyMd',
  visuallyHidden,
  textDecorationLine,
  className,
  ...props
}) => {
  // Refined color palette with improved contrast and accessibility
  const toneClasses = {
    base: 'text-gray-900 dark:text-gray-50', // Enhanced base color contrast
    disabled: 'text-gray-400 dark:text-gray-500 opacity-60', // More accessible disabled state
    inherit: 'text-inherit',
    success: 'text-green-700 dark:text-green-300', // Balanced success tone
    critical: 'text-red-700 dark:text-red-300', // Improved error/critical color
    caution: 'text-amber-700 dark:text-amber-300', // More nuanced caution tone
    subdued: 'text-gray-600 dark:text-gray-300', // Better subdued tone
    'text-inverse': 'text-white dark:text-black', // Clear inverse colors
    'text-inverse-secondary': 'text-gray-100 dark:text-gray-800', // Secondary inverse
    magic: 'text-purple-700 dark:text-purple-300', // Consistent magic tone
    'magic-subdued': 'text-purple-600 dark:text-purple-200', // Subdued magic tone
  };

  // Improved typography scale with more nuanced sizing and line heights
  const variantClasses = {
    heading3xl: 'text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]', // More impactful display
    heading2xl: 'text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2]',
    headingXl: 'text-2xl lg:text-3xl font-bold tracking-tight leading-[1.3]',
    headingLg: 'text-xl lg:text-2xl font-semibold tracking-tight leading-[1.4]',
    headingMd: 'text-lg lg:text-xl font-semibold tracking-normal leading-[1.4]',
    headingSm: 'text-base lg:text-lg font-semibold tracking-normal leading-[1.5]',
    headingXs: 'text-sm lg:text-base font-semibold tracking-normal leading-[1.5]',
    bodyLg: 'text-lg font-normal leading-[1.6]', // Improved readability
    bodyMd: 'text-base font-normal leading-[1.6]', // Optimal body text
    bodySm: 'text-sm font-normal leading-[1.5]', // Compact but readable
    bodyXs: 'text-xs font-normal leading-[1.4]', // Fine print
  };

  // Enhanced alignment and typography utility classes
  const alignmentClasses = {
    start: 'text-left',
    center: 'text-center',
    end: 'text-right',
    justify: 'text-justify',
  };

  const fontWeightClasses = {
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const listClasses = {
    ol: 'list-decimal pl-6 space-y-2 marker:text-gray-600', // Improved list spacing
    ul: 'list-disc pl-6 space-y-2 marker:text-gray-600', // Consistent marker styling
  };

  const accessibilityClasses = {
    numeric: 'tabular-nums', // Consistent numeric spacing
    breakWord: 'break-words', // Prevent text overflow
    truncate: 'truncate overflow-hidden text-ellipsis', // Improved text truncation
    visuallyHidden: 'sr-only', // Screen reader accessibility
  };

  const classes = clsx(
    // Base typography improvements
    'antialiased', // Smoother font rendering
    'text-pretty', // Improved text wrapping
    'selection:bg-primary-200 selection:text-primary-800', // Enhanced text selection

    // Conditional classes
    alignment && alignmentClasses[alignment],
    breakWord && accessibilityClasses.breakWord,
    numeric && accessibilityClasses.numeric,
    truncate && accessibilityClasses.truncate,
    fontWeight && fontWeightClasses[fontWeight],
    visuallyHidden && accessibilityClasses.visuallyHidden,
    tone && toneClasses[tone],
    textDecorationLine && `line-through`,
    variant && variantClasses[variant],
    Component === 'ol' && listClasses.ol,
    Component === 'ul' && listClasses.ul,

    // Additional custom classes
    className,
  );

  return (
    <Component id={id} className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Text;
