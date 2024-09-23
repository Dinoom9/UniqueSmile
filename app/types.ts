// types.d.ts
export interface User {
    name: string;
    email: string;
    phone: string;
    message: string;
}
export interface FormInputProps {
    id: string;
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    required?: boolean;
    icon: React.ReactNode;
    isTextarea?: boolean;
    placeholder?: string;
    dir?: string;
    error?: string;
}
export interface DentalInfoCardProps {
    title: string;
    icon: React.ReactNode;
    description: string;
}
