import { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Modal({ isOpen, onClose, title, children, size = "lg" }: ModalProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-[90vw] max-h-[90vh]",
  };

  useEffect(() => {
    if (!isOpen) return;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    (window as any)?.lenis?.stop?.();

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
      (window as any)?.lenis?.start?.();
    };
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent
        className={`${sizeClasses[size]} bg-asf-dark border-asf-gray text-white`}
        data-testid="modal-content"
        data-lenis-prevent
      >
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="font-rajdhani font-black text-2xl md:text-3xl">
            {title}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-asf-gray-dark"
            data-testid="modal-close"
          >
            <X className="w-6 h-6" />
          </Button>
        </DialogHeader>

        <div
          ref={scrollRef}
          className="mt-6 max-h-[70vh] overflow-y-auto overscroll-contain pr-2"
          onWheelCapture={(e) => e.stopPropagation()}
          onTouchMoveCapture={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageId: string;
  title: string;
}

export function ImageModal({ isOpen, onClose, imageId, title }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-5xl max-h-[90vh] bg-asf-black/95 border-none p-6"
        data-testid="image-modal"
      >
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute -top-4 -right-4 text-white hover:bg-asf-gray-dark z-10"
            data-testid="image-modal-close"
          >
            <X className="w-8 h-8" />
          </Button>
          <div className="w-full max-h-[80vh] flex items-center justify-center">
            <img
              src={imageId}
              alt={title}
              className="max-w-full max-h-full object-contain rounded-md"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-asf-gray-light text-lg font-rajdhani font-bold">{title}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
