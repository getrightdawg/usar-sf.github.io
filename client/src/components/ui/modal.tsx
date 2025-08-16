import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg", 
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-[90vw] max-h-[90vh]"
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className={`${sizeClasses[size]} bg-asf-dark border-asf-gray text-white max-h-[90vh] overflow-y-auto`}
        data-testid="modal-content"
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
        <div className="mt-6">
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
