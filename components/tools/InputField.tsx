import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Text from '@/components/ui/text';
import { cn } from '@/lib/utils';
import React, { ChangeEvent } from 'react';

interface InputFieldProps {
  label: string;
  helperText?: string;
  id: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  helperText,
  id,
  type = 'text',
  required = false,
  value,
  onChange,
}) => {
  return (
    <div className="space-y-1">
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        type={type}
        id={id}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        required={required}
        className={cn(required && !value && 'border-red-500')}
        aria-describedby={`${id}-helper-text`}
      />
      {helperText && (
        <Text as="p" variant="bodyMd" className="mt-2 text-sm">
          {helperText}
        </Text>
      )}
    </div>
  );
};

export default InputField;
