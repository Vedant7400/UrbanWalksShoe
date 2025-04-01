
import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Chatbot from "./Chatbot";

const ChatbotButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      toast({
        description: "How can I help you with your shoe shopping today?",
        duration: 3000,
      });
    }
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50">
        <Button
          onClick={toggleChatbot}
          className={`h-14 w-14 rounded-full shadow-lg transition-all duration-300 ${
            isOpen 
              ? "bg-red-500 hover:bg-red-600 rotate-90" 
              : "bg-gradient-to-r from-brand-purple to-brand-blue hover:shadow-xl"
          }`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </Button>
      </div>

      <div
        className={`fixed bottom-24 right-5 z-50 w-[350px] md:w-[400px] transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <Chatbot />
      </div>
    </>
  );
};

export default ChatbotButton;
