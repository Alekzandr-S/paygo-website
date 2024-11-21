'use client'

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/custom/modal";
import { Loader2 } from "lucide-react";

interface AlerModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    loading: boolean;
    description: string;
}

export const AlertModal: React.FC<AlerModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    loading,
    description
}) => {

    const [isMounted, setIsMounted] = useState<boolean>(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <Modal title="Are you sure?" description={description} isOpen={isOpen} onClose={onClose}>
            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button disabled={loading} variant="outline" onClick={onClose}>
                    Cancel
                </Button>

                <Button disabled={loading} variant="destructive" onClick={onConfirm}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Continue
                </Button>
            </div>
        </Modal>
    )

}